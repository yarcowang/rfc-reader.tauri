pub fn get_rfc_content(rfcno: &str) -> Option<String> {
    if let Some(res) = reqwest::blocking::get(format!("https://www.rfc-editor.org/rfc/rfc{}.txt", rfcno)).ok() {
        return res.text().ok()
    }
    None
}
