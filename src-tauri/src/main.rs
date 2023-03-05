#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

mod rfcrequest;

fn main() {
  tauri::Builder::default()
      .invoke_handler(tauri::generate_handler![rfcrequest::fetch_rfc])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
