// leitor de qr code
const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js'); // Mudança Buttons
const client = new Client();
// serviço de leitura do qr code
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
// apos isso ele diz que foi tudo certo
client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});
// E inicializa tudo 
client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms)); // Função que usamos para criar o delay entre uma ação e outra



// Funil

client.on('message', async msg => {

    if (msg.body.match(/(menu|Menu|dia|tarde|noite|oi|Oi|Olá|olá|ola|Ola|boa|Boa)/i) && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from,'Olá! '+ name.split(" ")[0] + ' Sou o assistente virtual da empresa A loja Celulares. Como posso ajudá-lo hoje? Por favor, digite uma das opções abaixo:\n\n1 - Gostaria de saber o status do diagnóstico do meu aparelho.\n2 - Qual é o endereço da loja?\n3 - Quais são os horários de funcionamento?\n4 - Quais tipos de serviços vocês oferecem?\n5 - Quais os Prudutos da loja?\n6- Quais informações devo saber antes de deixar meu aparelho para reparo?\n7 - Falar com um atendente.'); //Primeira mensagem de texto
    
        
    }




    if (msg.body !== null && msg.body === '1' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'O prazo máximo para diagnóstico e orçamento é de até 48 horas úteis. Assim que tivermos uma resposta sobre a situação do seu aparelho, entraremos em contato imediatamente.\n Fique tranquilo, o diagnóstico é totalmente sem custo.');

        await delay(2000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(2000);
        await client.sendMessage(msg.from, '⚠️ Importante: A pressa é inimiga da perfeição!\nAnalisar seu aparelho com atenção e cuidado garante um serviço mais preciso e seguro — tanto para a loja quanto para você, nosso cliente.');
        await delay(1000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(1000);
        await client.sendMessage(msg.from, 'Digite "Menu" para retornar à tela inicial de opções.');

    }

    if (msg.body !== null && msg.body === '2' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '📍 Localização da Loja\nEstamos localizados na R. Emídio dos Santos, 12 - Barbalho, Salvador - BA, 40301-015.\nAcesse o mapa: https://share.google/Eownh3J91EY7emxjR');

        await delay(1000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(1000);
        await client.sendMessage(msg.from, 'Digite "Menu" para retornar à tela inicial de opções.');
    }

    if (msg.body !== null && msg.body === '3' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '🕒 Horário de Funcionamento\n📅 Segunda a Sexta-feira:\nDas 9h às 18h\n⏸️ Pausa para almoço: das 12h às 13h30\n\n📅 Sábado:\nDas 9h às 14h');
       
        await delay(1000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(1000);
        await client.sendMessage(msg.from, 'Digite "Menu" para retornar à tela inicial de opções.');
    
    }

    if (msg.body !== null && msg.body === '4' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Trabalhamos com manutenção de celulares, tablets, notebooks e computadores, oferecendo uma ampla variedade de serviços, como:\n- Troca de display\n- Troca de bateria\n- Reparo em placa\n- Substituição de carcaça\n- E muito mais!');


        await delay(2000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(2000);
        await client.sendMessage(msg.from, 'Também vendemos acessórios e produtos de alta qualidade, sempre pensando na sua satisfação!\n Para saber mais sobre nossos produtos, acesse: https://wa.me/c/557192355204');

        await delay(1000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(1000);
        await client.sendMessage(msg.from, 'Digite "Menu" para retornar à tela inicial de opções.');


    }

    if (msg.body !== null && msg.body === '5' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '🛍️ Trabalhamos com uma grande variedade de produtos, desde películas até smartwatches, sempre priorizando a alta qualidade para garantir a sua satisfação!\n\n📍 Quer conhecer mais?\nVisite nossa loja física ou confira nosso catálogo online no WhatsApp:\nhttps://wa.me/c/557192355204');

        await delay(1000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(1000);
        await client.sendMessage(msg.from, 'Digite "Menu" para retornar à tela inicial de opções.');


    }

    if (msg.body !== null && msg.body === '6' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Antes de deixar seu aparelho conosco, levar a sua via da Ordem de Serviço é indispensável.\nEla será necessária tanto para retirar o aparelho quanto para solicitar a garantia, caso necessário.\n\nlembre-se de confirmar que os dados informados abaixo estão corretos na Ordem de Serviço:\n- Nome completo\n- Número de telefone\n- CPF\n- Modelo do aparelho\n- Tipo de serviço solicitado'); //Mensagem de texto


        await delay(2000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(2000);
        await client.sendMessage(msg.from, '⚠️ Atenção:\nLembre-se de remover a gaveta do chip, o chip, o cartão de memória e a capa do aparelho antes da entrega.Não nos responsabilizamos por esses itens.');

        
        await delay(1000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(1000);
        await client.sendMessage(msg.from, 'Digite "Menu" para retornar à tela inicial de opções.');


    }
        if (msg.body !== null && msg.body === '7' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Fique à vontade para deixar sua mensagem. Em breve,um atendente da loja entrará em contato para prestar o atendimento necessário.'); //Mensagem de texto

    }




const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
  authStrategy: new LocalAuth()
});




});