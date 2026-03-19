const BASE_URL = "http://localhost:3000";

export async function getProdutos() {
    const res = await fetch(`${BASE_URL}/produtos`);
    return res.json();
}
