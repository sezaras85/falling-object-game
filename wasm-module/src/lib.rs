use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn calculate_score(falling_time: f64, object_weight: f64) -> f64 {
    // Örnek bir skor hesaplama formülü
    falling_time * object_weight
}
