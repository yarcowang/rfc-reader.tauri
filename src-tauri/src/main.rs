#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

mod rfcrequest;

// use tauri::Manager;

fn main() {
  tauri::Builder::default()
      // .setup(|app| {
      //   let id = app.listen_global("store-hits", |event| {
      //     println!("got store-hits with payload {:?}", event.payload());
      //   });
      //   app.unlisten(id);
      //     Ok(())
      // })
      .invoke_handler(tauri::generate_handler![rfcrequest::get_rfc])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
