use reqwest;

#[tauri::command]
pub async fn fetch_rfc(rfc: String) -> String {
    let body = reqwest::get(format!("https://www.rfc-editor.org/rfc/rfc{}.txt", rfc))
        .await.unwrap()
        .text()
        .await.unwrap();

    body
}
