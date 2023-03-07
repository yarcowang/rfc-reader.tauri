use std::fs::{File, read_to_string};
use std::io::{self, Write};
use std::path::Path;
use directories::ProjectDirs;

pub fn get_storage_path(rfcno: &str) -> Option<String> {
    if let Some(proj_dirs) = ProjectDirs::from("net", "bbish", "rfcreader") {
        return proj_dirs.data_dir().join(format!("rfc{rfcno}.txt")).to_str().map(Into::into)
    }
    None
}

pub fn init_storage() -> io::Result<()> {
    if let Some(proj_dirs) = ProjectDirs::from("net", "bbish", "rfcreader") {
        let path = proj_dirs.data_dir();
        if !path.exists() {
            std::fs::create_dir_all(path)?;
        }
    }
    Ok(())
}

pub fn check_exist(rfcno: &str) -> bool {
    if let Some(rfcfile) = get_storage_path(rfcno) {
        // println!("{}", rfcfile);
        return Path::new(&rfcfile).exists()
    }
    false
}

pub fn save_file_all(rfcno: &str, content: String) -> io::Result<()> {
    if let Some(rfcfile) = get_storage_path(rfcno) {
        let mut file = File::create(rfcfile)?;
        file.write_all(content.as_bytes())?;
    }
    Ok(())
}

pub fn read_file_all(rfcno: &str) -> String {
    if let Some(rfcfile) = get_storage_path(rfcno) {
        if let Some(content) = read_to_string(& rfcfile).ok() {
            // println!("{}", content);
            return content
        }
    }
    "Not Found!".into()
}
