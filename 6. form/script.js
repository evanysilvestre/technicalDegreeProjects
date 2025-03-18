document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("product-form");
    const productTable = document.getElementById("product-table").getElementsByTagName('tbody')[0];
    const addProductBtn = document.getElementById("add-product-btn");

    let products = [];

    // Função para atualizar a lista de produtos
    function updateProductList() {
        // Limpa a tabela
        productTable.innerHTML = "";

        // Ordena os produtos por preço
        products.sort((a, b) => a.price - b.price);

        // Adiciona os produtos à tabela
        products.forEach(product => {
            const row = productTable.insertRow();
            row.innerHTML = `
                <td>R$ ${product.price.toFixed(2)}</td>
                <td>${product.name}</td>
            `;
        });
    }

    // Função para cadastrar um novo produto
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const description = document.getElementById("description").value;
        const price = parseFloat(document.getElementById("price").value);
        const available = document.getElementById("available").value;

        // Cria o objeto do produto
        const product = {
            name,
            description,
            price,
            available
        };

        // Adiciona o produto ao array de produtos
        products.push(product);

        // Atualiza a lista de produtos
        updateProductList();

        // Limpa o formulário
        form.reset();
    });

    // Função para mostrar o formulário de cadastro
    addProductBtn.addEventListener("click", () => {
        document.getElementById("product-form").scrollIntoView({ behavior: "smooth" });
    });
});