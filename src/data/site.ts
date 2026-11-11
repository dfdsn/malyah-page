// ============================================================
//  CONTEÚDO DO SITE — edite aqui. Itens marcados com [PREENCHER]
//  são exemplos e devem ser trocados pelos dados reais.
// ============================================================

export const empresa = {
  nome: 'Malyah', // [PREENCHER] confirme o nome oficial
  slogan: 'Software sob medida e integração de sistemas fiscais',
  email: 'contato@malyah.com.br', // [PREENCHER]
  telefone: '(00) 00000-0000', // [PREENCHER]
  whatsapp: '5500000000000', // [PREENCHER] só números, com DDI 55 + DDD
  cidade: 'Sua cidade – UF', // [PREENCHER]
  linkedin: 'https://www.linkedin.com/', // [PREENCHER]
  github: 'https://github.com/', // [PREENCHER]
  // [PREENCHER] crie um formulário grátis em formspree.io e cole o endpoint aqui.
  // Enquanto estiver vazio, o formulário abre o e-mail do visitante.
  formEndpoint: '',
};

export const slides = [
  {
    tag: 'Integração fiscal',
    titulo: 'Seus documentos fiscais fluindo sem retrabalho',
    texto: 'Integramos ERPs, PDVs e e-commerces com NF-e, NFC-e, NFS-e, CT-e e MDF-e, conectados à SEFAZ e às prefeituras.',
    cta: { texto: 'Fale com a gente', href: 'contato.html' },
    tema: 'fiscal',
  },
  {
    tag: 'Integração de sistemas',
    titulo: 'Sistemas que conversam entre si',
    texto: 'APIs, webhooks, filas e conectores para unir ERP, marketplace, banco, logística e o que mais o seu negócio usa.',
    cta: { texto: 'Ver projetos', href: 'projetos.html' },
    tema: 'integracao',
  },
  {
    tag: 'Desenvolvimento sob medida',
    titulo: 'Software feito para o seu processo',
    texto: 'Do levantamento ao deploy: aplicações web, serviços e automações construídos para a realidade da sua operação.',
    cta: { texto: 'Conheça o time', href: 'quem-somos.html' },
    tema: 'dev',
  },
  {
    tag: 'Obrigações acessórias',
    titulo: 'SPED, tributação e conformidade em dia',
    texto: 'Geração e validação de SPED Fiscal e Contribuições, cálculo de impostos e preparação para a Reforma Tributária (IBS/CBS).',
    cta: { texto: 'Solicitar orçamento', href: 'contato.html' },
    tema: 'sped',
  },
];

export const servicos = [
  { icone: 'doc', titulo: 'Documentos fiscais eletrônicos', texto: 'Emissão, consulta, cancelamento e contingência de NF-e, NFC-e, NFS-e, CT-e e MDF-e.' },
  { icone: 'plug', titulo: 'Integração entre sistemas', texto: 'APIs REST, webhooks e conectores entre ERP, e-commerce, marketplaces e gateways.' },
  { icone: 'code', titulo: 'Desenvolvimento sob medida', texto: 'Sistemas web e serviços de back-end pensados para escalar com o seu negócio.' },
  { icone: 'chart', titulo: 'SPED e Reforma Tributária', texto: 'Arquivos SPED, regras de tributação e adequação ao novo modelo IBS/CBS.' },
];

// [PREENCHER] troque pelos membros reais do time
export const time = [
  { nome: 'Nome do Dev 1', cargo: 'Sócio e desenvolvedor', bio: 'Especialista em integrações fiscais e back-end.', iniciais: 'D1' },
  { nome: 'Nome do Dev 2', cargo: 'Sócio e desenvolvedor', bio: 'Foco em APIs, arquitetura e automação de processos.', iniciais: 'D2' },
];

// [PREENCHER] projetos reais (pode omitir o nome do cliente se houver sigilo)
export const projetos = [
  { titulo: 'Integração ERP × SEFAZ', categoria: 'Fiscal', texto: 'Serviço de emissão de NF-e com fila de contingência, reprocessamento automático e painel de acompanhamento.', tags: ['NF-e', 'SEFAZ', 'API REST'] },
  { titulo: 'Hub de NFS-e multi-prefeitura', categoria: 'Fiscal', texto: 'Camada única de emissão de notas de serviço para diferentes padrões municipais e o Padrão Nacional.', tags: ['NFS-e', 'Padrão Nacional', 'Webservices'] },
  { titulo: 'Conector e-commerce × ERP', categoria: 'Integração', texto: 'Sincronização de pedidos, estoque e faturamento entre loja virtual, marketplaces e ERP.', tags: ['Webhooks', 'Marketplaces', 'Filas'] },
  { titulo: 'Gerador e validador de SPED', categoria: 'Fiscal', texto: 'Geração do EFD ICMS/IPI e Contribuições a partir dos dados do ERP, com validação antes da entrega.', tags: ['SPED', 'EFD', 'Validação'] },
  { titulo: 'Integração PDV × NFC-e', categoria: 'Integração', texto: 'Emissão de NFC-e no ponto de venda com operação offline e envio posterior.', tags: ['NFC-e', 'PDV', 'Offline'] },
  { titulo: 'Portal de automação interna', categoria: 'Sob medida', texto: 'Sistema web para automatizar rotinas manuais de conferência e conciliação.', tags: ['Web', 'Automação', 'Dashboard'] },
];

// [PREENCHER] clientes reais. Para usar logo, coloque o arquivo em /public/clientes e informe "logo: 'clientes/arquivo.png'"
export const clientes = [
  { nome: 'Cliente Exemplo 1', segmento: 'Varejo', logo: '' },
  { nome: 'Cliente Exemplo 2', segmento: 'Indústria', logo: '' },
  { nome: 'Cliente Exemplo 3', segmento: 'Distribuição', logo: '' },
  { nome: 'Cliente Exemplo 4', segmento: 'Software house', logo: '' },
  { nome: 'Cliente Exemplo 5', segmento: 'Serviços', logo: '' },
  { nome: 'Cliente Exemplo 6', segmento: 'E-commerce', logo: '' },
];

// [PREENCHER] depoimentos reais (ou deixe a lista vazia para esconder a seção)
export const depoimentos = [
  { texto: 'A integração fiscal que levávamos meses tentando resolver ficou pronta e estável em poucas semanas.', autor: 'Nome do cliente', cargo: 'Cargo, Empresa' },
  { texto: 'Time próximo, que entende de regra fiscal e de código. Faz toda a diferença.', autor: 'Nome do cliente', cargo: 'Cargo, Empresa' },
];
