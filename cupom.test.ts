const cupom = require("./cupom");

test("Exercício 1", () => {
	expect(cupom.imprime_dados_loja()).toBe(
		`Arcos Dourados Com. de Alimentos LTDA
Av. Projetada Leste, 500 EUC F32/33/34
Br. Sta Genebra - Campinas - SP
CEP:13080-395 Tel (19) 3756-7408
Loja 1317 (PDP)
CNPJ: 42.591.651/0797-34
IE: 244.898.500.113
`
	);
});

test("Exercício 2 - tudo vazio", () => {
	cupom.dados.nome_loja = "";
	cupom.dados.logradouro = "";
	cupom.dados.numero = 0;
	cupom.dados.complemento = "";
	cupom.dados.bairro = "";
	cupom.dados.municipio = "";
	cupom.dados.estado = "";
	cupom.dados.cep = "";
	cupom.dados.telefone = "";
	cupom.dados.observacao = "";
	cupom.dados.cnpj = "";
	cupom.dados.inscricao_estadual = "";

	let expected = "\n";
	expected += ", 0 \n";
	expected += ` -  - \n`;
	expected += `CEP: Tel \n`;
	expected += "\n";
	expected += `CNPJ: \n`;
	expected += `IE: \n`;

	expect(cupom.imprime_dados_loja()).toBe(expected);
});

test("Exercício 2 - customizado", () => {
	// Defina seus próprios valores para as variáveis a seguir
	cupom.dados.nome_loja = "Top 10 nomes de lojas";
	cupom.dados.logradouro = "Rua Tchurusbango Tchurusmago";
	cupom.dados.numero = 13;
	cupom.dados.complemento = "Do lado da casa vizinha";
	cupom.dados.bairro = "Bairro do Limoeiro";
	cupom.dados.municipio = "São Paulo";
	cupom.dados.estado = "SP";
	cupom.dados.cep = "08090-284";
	cupom.dados.telefone = "(11) 4002-8922";
	cupom.dados.observacao = "Entre o Campinho e a Lua de Baixo";
	cupom.dados.cnpj = "43.745.249/0001-39";
	cupom.dados.inscricao_estadual = "564.213.199.866";

	let expected = "Top 10 nomes de lojas\n";
	expected += "Rua Tchurusbango Tchurusmago, 13 Do lado da casa vizinha\n";
	expected += "Bairro do Limoeiro - São Paulo - SP\n";
	expected += "CEP:08090-284 Tel (11) 4002-8922\n";
	expected += "Entre o Campinho e a Lua de Baixo\n";
	expected += "CNPJ: 43.745.249/0001-39\n";
	expected += "IE: 564.213.199.866\n";

	expect(cupom.imprime_dados_loja()).toBe(expected);
});
