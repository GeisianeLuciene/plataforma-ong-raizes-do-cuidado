/* ==========================================================================
   MÓDULO DE VALIDAÇÃO DO FORMULÁRIO
   Este arquivo exporta UMA função: inicializarValidacaoFormulario
   ========================================================================== */

// Lista dos tipos de erro que vamos verificar
const tiposDeErro = [
    'valueMissing',    // Campo vazio
    'typeMismatch',    // Erro de tipo (ex: e-mail sem @)
    'patternMismatch', // Não corresponde ao padrão (ex: CPF com formato errado)
    'tooShort'         // Curto demais (usamos para o nome)
];

// Objeto com as mensagens de erro customizadas para cada campo
const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        tooShort: "Por favor, preencha um nome com no mínimo 3 caracteres."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido no formato XXX.XXX.XXX-XX."
    },
    telefone: {
        valueMissing: "O campo de telefone não pode estar vazio."
    },
    cep: {
        valueMissing: "O campo de CEP não pode estar vazio.",
        patternMismatch: "Por favor, preencha um CEP válido no formato 00000-000."
    },
    endereco: {
        valueMissing: "O campo de endereço não pode estar vazio."
    },
    cidade: {
        valueMissing: "O campo de cidade não pode estar vazio."
    },
    estado: {
        valueMissing: "Por favor, selecione um estado."
    }
};

// --- Função que verifica o campo ---
function verificaCampo(campo) {
    let mensagem = "";
    const errorSpan = campo.nextElementSibling;
    
    // Para cada tipo de erro na nossa lista...
    tiposDeErro.forEach(erro => {
        // ...verifica se a validação padrão do navegador para aquele erro deu 'true'
        if (campo.validity[erro]) {
            // Se deu, pega a mensagem de erro correspondente ao campo e ao erro
            mensagem = mensagens[campo.name][erro];
        }
    });

    // Se houver uma mensagem de erro, mostra-a. Se não, limpa.
    if (mensagem) {
        errorSpan.textContent = mensagem;
        campo.classList.add('erro');
    } else {
        errorSpan.textContent = "";
        campo.classList.remove('erro');
    }
}

// --- Esta é a FUNÇÃO PRINCIPAL que o roteador vai chamar ---
export function inicializarValidacaoFormulario() {
    
    // 1. Encontra os campos APENAS DEPOIS que a função é chamada
    //    Usamos '#conteudo-principal [required]' para ser mais específico
    const camposDoFormulario = document.querySelectorAll('#conteudo-principal [required]');

    // 2. Para cada campo encontrado, adiciona os "ouvintes" de evento
    camposDoFormulario.forEach((campo) => {
        campo.addEventListener('blur', () => verificaCampo(campo));
        campo.addEventListener('invalid', evento => evento.preventDefault());
    });
}