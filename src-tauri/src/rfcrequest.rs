mod storage;
mod fetcher;

#[tauri::command]
pub fn get_rfc(rfcno: &str) -> String {
    if !storage::check_exist(rfcno) {
        storage::init_storage().ok();
        if let Some(content) = fetcher::get_rfc_content(rfcno) {
            storage::save_file_all(rfcno, content).ok();
        }
    }

    storage::read_file_all(rfcno)
}

// #[tauri::command]
// pub async fn fetch_rfc(rfc: String) -> String {
//     let body = reqwest::get(format!("https://www.rfc-editor.org/rfc/rfc{rfc}.txt"))
//         .await.unwrap()
//         .text()
//         .await.unwrap();
//
//     body
// }
