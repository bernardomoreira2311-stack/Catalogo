function mostrarProduto() {
    let pdtInteli = document.getElementById("pdtInteli").value;
    let descricao = document.getElementById("descricao");
 
    switch (pdtInteli) {
        case "iph17":
            document.getElementById("imagem").src = "iphone17.png";
            descricao.textContent = "Iphone 17 pro max (11.499.99$)";
 
            break;
 
        case "airp4":
            document.getElementById("imagem").src = "airpods4.png";
            descricao.textContent = "Fone de ouvido da apple (2.999.99$)"
        case "afeLux":
            document.getElementById("imagem").src = "airfryer.png";
            descricao.textContent = "lectrolux Air Fryer Forno 5 x 1 12L 1700W Digital Espeto Giratório 2 Bandejas Antiaderentes 10 funções 7 Receitas aviso sonoro Fritadeira Elétrica sem Óleo Forno Bancada EAF90 Grafite 127V (1,799,99$)";
            break;
 
        case "GelElx":
            document.getElementById("imagem").src = "geladeira.png";
            descricao.textContent = "Geladeira Electrolux Frost Free Inverter 590L AutoSense 3 Portas Cor Inox Look (IM8S) - 127V (4.599.99$)";
            break;
 
        case "chutcNike":
            document.getElementById("imagem").src = "chuteira.png";
            descricao.textContent = "Chuteira Campo Nike Mercurial Zoom Vapor 16 Elite (2.000.00$)";
            break;
 
        default:
            document.getElementById("imagem").src = "casasbahia.png";
            descricao.textContent = "Selecione um produto para ver a descrição.";
    }
}