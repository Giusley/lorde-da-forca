
/*█ HELLO WORLD █████████████████████████████████████████████████████████████*/
/*███████████████████████████████████████████████████████████████████████████*/
console.log(...['%c█ H A N G M A N \n',
 'font-size: 1.6em; color: blue; text-shadow: 2px 2px 4px #000000;'])
/**██████████████████████████████████████████████████████████████████████████*/
/**	@App: Hangman-2021|2023;	█████████████████████████████████████████████*/
/**	@Version: 1.0;				█████████████████████████████████████████████*/
/**	@author: Giusley Camilo;	█████████████████████████████████████████████*/
/**	@Data: mai-2021|apr-2023;	█████████████████████████████████████████████*/
/**██████████████████████████████████████████████████████████████████████████*/
console.log(...['%cLORDE DA FORCA - por Giusley Camilo',
 `background:#ffffff23;font-size: 1.2em; color: cyan; 
 text-shadow: 2px 2px 4px #000000; color: 110% blue;`])

var allConfig = { 
	acertadas: 0,
	avatarType: 1,
	arrMissoes:[false,false,false,false,false,false,false,false],
	difficultyType: 5,
	erradas: 0,
	lastWinRecord:0,
	lastWinCounter:0,
	newNotify:true,
	animBg:true,
	voiceOn:false,
	soundMenu: true,
	soundMusic: true,
	soundVolume: 0.5,
	pontos: 0,
	tecladoType:1,
	timerType: null,
	totalJogos: 0,
	wordsType: "0"
}

//const wordType_Frutas = ["Nomes de bebidas"].map(fruta => fruta.toUpperCase());
const wordType_Frutas = ["acerola", "ameixa", "abacate", "abacaxi", "amora", "banana", "caju", "caqui", "cacau", "carambola", "cereja", "cidra", "coco", "cupuaçu", "figo", "goiaba", "graviola", "groselha", "jabuticaba", "jaca", "kiwi", "limão", "laranja", "mamão", "manga", "mangostim", "maracujá", "melancia", "melão", "morango", "nêspera", "pepino", "pera", "physalis", "pitanga", "pêssego", "quiabo", "romã", "tamarindo", "tangerina", "uva"].map(obj => obj.toUpperCase());
const wordType_Objeto = ['abajur', 'abridor', 'agenda', 'álbum', 'alicate', 'almofada', 'amplificador', 'aparador', 'apontador', 'aquecedor',  'armário', 'arpão', 'arte', 'aspirador', 'atlas', 'bacia', 'bala', 'balão', 'banco', 'bandeja', 'banquinho', 'barco', 'barraca', 'bateria', 'bebida', 'berço', 'bermuda', 'bicicleta', 'bola', 'bolo', 'boneca', 'boné', 'borracha', 'botão', 'brinquedo', 'bússola', 'cabide', 'caderno', 'cafeteira', 'caixa', 'calculadora','calendário', 'cama', 'câmera','caneta', 'canetinha', 'capacete'].map(fruta => fruta.toUpperCase());
const wordType_Easter = ["brasil", "cavalo", "bemtevi", "chimpanzé","burro"].map(easter => easter.toUpperCase());
const wordType_Animal = ["abelha", "águia", "alce", "antílope", "arara", "ariranha", "babuíno", "baleia", "beijaflor", "bemtevi", "bichodaseda", "bisonte", "boi", "boto", "burro", "cabra", "cachalote", "cachorro", "caimão", "camelo", "capivara", "caracol", "caranguejo", "carneiro", "castor", "cavalo", "cegonha", "chimpanzé", "cisne", "coelho", "crocodilo", "cutia", "deer", "dinossauro", "dromedário", "elefante", "foca", "formiga", "galinha", "garça", "gato", "gavião", "girafa", "golfinho", "gorila", "grilo", "hamster", "hiena", "hipopotamo", "iguana", "jabuti", "jacaré", "jaguar", "joaninha", "joãodebarro", "kiwi", "lagarto", "lambari", "leão", "libélula", "lobo", "lula", "macaco", "mamute", "mariposa", "marmota", "mico", "minhoca", "mosca", "naja", "onça", "orangotango", "ornitorrinco", "ouriço", "panda", "papagaio", "pássaro", "pato", "peixe", "pelicano", "peru", "piolho", "pomba", "pônei", "porco", "porcoespinho", "puma", "rato", "sapo", "tamanduá"].map(animal => animal.toUpperCase());
const wordType_Pais = ['Afeganistão', 'Albânia', 'Algeria', 'Andorra', 'Angola', 'Argentina', 'Armênia', 'Austrália', 'Áustria',  'Bahamas', 'Bahrein', 'Bangladesh', 'Barbados', 'Bélgica', 'Bolívia','Brasil', 'Bulgária', 'Camboja', 'Camarões', 'Canadá', 'CaboVerde', 'Chade', 'Chile', 'China', 'Colômbia', 'Comores', 'Congo', 'Costa Rica', 'Croácia', 'Cuba', 'Chipre', 'RepúblicaTcheca', 'Dinamarca', 'Dominica', 'Equador', 'Egito', 'ElSalvador', 'Estônia', 'Etiópia', 'Finlândia', 'França', 'Gabão', 'Gâmbia', 'Alemanha', 'Gana', 'Grécia', 'Granada', 'Guatemala', 'Guiné', 'Guiana', 'Haiti', 'Honduras', 'Hungria', 'Islândia', 'Índia', 'Indonésia', 'Irã', 'Iraque', 'Irlanda', 'Israel', 'Itália', 'Jamaica', 'Japão', 'Jordânia', 'Cazaquistão', 'Quênia',  'Kuwait',   'Líbano', 'Libéria', 'Líbia', 'Lituânia', 'Luxemburgo', 'Macedônia', 'Malásia', 'Maldivas', 'Mali', 'Malta', 'Mauritânia', 'Maurício', 'México', 'Micronésia', 'Moldávia', 'Mônaco', 'Mongólia', 'Montenegro', 'Marrocos', 'Moçambique', 'Myanmar', 'Namíbia', 'Nauru', 'Nepal', 'Holanda', 'Nicarágua', 'Nigéria', 'Noruega', 'Paquistão', 'Paraguai', 'Peru'].map(pais => pais.toUpperCase());
const wordType_Carro = ["Audi", "BMW", "Cadillac", "Chevrolet", "Chrysler", "Citroen", "Dodge", "Ferrari", "Fiat", "Ford", "Honda", "Hyundai", "Infiniti", "Jaguar", "Jeep", "Kia", "Lamborghini", "LandRover", "Lexus", "Maserati", "Mazda", "Mercedes", "Mini", "Mitsubishi", "Nissan", "Peugeot", "Porsche", "Renault", "RollsRoyce", "Saab", "Subaru", "Suzuki", "Toyota", "Volvo", "Volkswagen", "Acura", "AlfaRomeo", "AstonMartin", "Bentley", "Bugatti", "Buick", "Chevrolet", "Chrysler", "Dodge", "Jaguar", "Jeep", "Kia", "Lada", "Lancia", "LandRover", "Lexus", "Lifan", "Lincoln", "Maserati", "Maybach", "Mazda", "Mercedes", "Mini", "Mitsubishi", "Peugeot", "Pontiac", "Porsche", "Renault", "RollsRoyce", "Saab", "Seat", "Skoda", "Smart", "Subaru", "Suzuki", "Tesla", "Toyota", "Volkswagen", "Volvo"].map(carro => carro.toUpperCase());
const wordType_Profissao = ["Advogado","Médico","Engenheiro","Professor","Arquiteto","Desenvolvedor","Contador","Psicólogo","Enfermeiro","Farmacêutico","Dentista","Jornalista","Publicitário","Administrador","Economista","Veterinário","Cientista","Astrônomo","Geólogo","Físico","Biólogo","Químico","Matemático","Estilista","Artista","Músico","Escritor","Cineasta","Dançarino","Chef","Garçom","Empresário","Ator","Modelo","Atleta","Treinador","Coach","Terapeuta","Consultor","Policial"].map(profissao => profissao.toUpperCase());
const wordType_Marcas = [ "Apple","Nike","CocaCola","Samsung","McDonalds","Adidas","Toyota","MercedesBenz","Amazon","IBM","Microsoft","BMW","Pepsi","Ford","Intel","LouisVuitton","Gucci","Chanel","Prada","Rolex","Hermès","Lamborghini","Ferrari","Audi","Volkswagen","Honda","Nestlé","Sony","LG","Zara","H&M","Gap","Levis","GAP","Lacoste","TommyHilfiger","CalvinKlein","RalphLauren","LOréal"].map(marca => marca.toUpperCase())
const wordType_Mercado = ["SABONETE", "MACARRÃO", "ARROZ", "FEIJÃO", "DESODORANTE", "DESINFETANTE", "CAJU","BANANA","MAÇÃ","PÃO","QUEIJO","PRESUNTO","SALAME","MANTEIGA","LEITE","IOGURTE","OVOS","BATATA","CEBOLA","ALHO","CENOURA","ABOBORA","TOMATE","ALFACE","COUVE","AGRIÃO","BROCOLIS","ESPINAFRE","BIFE","FRANGO","LINGUIÇA","SALSICHA","PEIXE","CAMARÃO","AZEITONA","MOLHO","KETCHUP","MOSTARDA","VINAGRE","ÓLEO","SUCO","REFRIGERANTE","CERVEJA","VINHO"].map(mercado => mercado.toUpperCase());
const wordType_Longas = ["desnecessário","inconstitucional","inconstitucionalidade","indestrutibilidade","contraindicado","inconsequente","inconsequência","interdependência","intransigente","intransigência","desesperadamente","inconveniente","inconveniência","incontinência","indeterminado","indeterminação","inexplicável","inexplicabilidade","inseparável","indubitavelmente","inconstância","incredulidade","irreparável","irreparabilidade","irreversível","irreversibilidade","involuntariamente","irreconhecível","injustificável","injustificávelmente","intransponível","intransferível","incontestável","incontestavelmente","incompreensível","incompreensibilidade","incomunicável","indiscutível","indiscutivelmente","indispensável","indispensavelmente","indissolúvel","indeterminável","indiferentemente"].map(plonga => plonga.toUpperCase());
const wordType_Bebidas = ["Água", "Café", "Chá", "Cerveja", "Refrigerante", "Guaraná", "Mate", "Leite", "Vinho", "Cachaça", "Licor", "Caipirinha", "Caipiroska", "Batida", "Quentão", "Chimarrão", "Cafécomleite", "Pingado", "Garapa", "Caldodecana", "Cajuína", "Coquetel", "Maracujina", "Catuaba", "Jurubeba", "Brahma", "Skol", "Antarctica", "Itaipava", "Bohemia", "Devassa"].map(bebida => bebida.toUpperCase());
const wordType_Verbos = ["Andar", "Comer", "Dormir", "Acordar", "Correr", "Falar", "Ouvir", "Beber", "Escrever", "Ler", "Dançar", "Cantar", "Estudar", "Trabalhar", "Viajar", "Pensar", "Sentir", "Chorar", "Sorrir", "Conversar", "Discutir", "Conhecer", "Amar", "Odiar", "Ajudar", "Pedir", "Responder", "Perguntar", "Aprender", "Ensinar", "Participar", "Chegar", "Sair", "Entrar", "Sair", "Viver", "Morrer", "Criar", "Inovar", "Resolver"].map(verbo => verbo.toUpperCase());
const wordType_All = wordType_Objeto.concat(wordType_Easter,wordType_Frutas,wordType_Animal,wordType_Pais,wordType_Carro,wordType_Profissao,wordType_Marcas,wordType_Mercado,wordType_Longas,wordType_Bebidas,wordType_Verbos)

const body = document.getElementsByTagName('body')[0]
const main = document.getElementsByTagName('main')[0]
const footer = document.getElementsByTagName('footer')[0]
const h2 = document.getElementsByTagName('h2')[0]

const pnlCtxLi = document.querySelectorAll('.pnlCtxLi')
const pnlCtx = document.querySelector('#pnlCtx')
const ctxOrganizar = document.querySelector('#ctxOrganizar')
const ctxAtalhos = document.querySelector('#ctxAtalhos')
const ctxInfo = document.querySelector('#ctxInfo')
const ctxRefresh = document.querySelector('#ctxRefresh')

const pnlNotify = document.querySelector('#pnlNotify')
const ulNotify = document.querySelector('#ulNotify')
const cardNotify = document.querySelectorAll('.cardNotify')
const cardTitleNotify = document.querySelectorAll('.cardTitleNotify')
const themeMin = document.querySelectorAll('.themeMin')
const cardItemNotify = document.querySelectorAll('.cardItemNotify')

const menuLinks = document.querySelector('#menuLinks')
const dialogInfo = document.querySelector('#dialogInfo')
const dialogAtalhos = document.querySelector('#dialogAtalhos')
const summary = document.querySelector('summary');
const donateDetails = document.querySelector('#donateDetails')
const btnCloseDialog = document.querySelectorAll('.btnCloseDialog')
const divBg = document.querySelector('#divBg')
const divSetaDown = document.querySelector('#divSetaDown')
const divBgTxt = divBg.textContent

const menuBtn = document.querySelector('[data-panel="menu"]') // painel play - play btn
const playBtn = document.querySelector('[data-playBtn="play"]') // painel play - play btn
const selectBtn = document.querySelector('[data-selectBtn="game"]') // painel game - select tema
const restartBtn = document.querySelector('[data-restartBtn="play"]') // painel play - nova palavra

const menu = document.querySelector('#menu')
const options = document.querySelector('#options')
const game = document.querySelector('#game')
const play = document.querySelector('#play')
const about = document.querySelector('#about')
const titulotopo = document.querySelector('#titulotopo')
const responseDicas = document.querySelector('#responseDicas')
const assinatura = document.querySelector('#assinatura')

const questionIco = document.querySelector('#questionIco')
const fullIco = document.querySelector('#fullIco')
const statsGame = document.querySelector('#statsGame')
const ulConquistas = document.querySelector('#ulConquistas')
const liConquistas = document.querySelectorAll('.liConquistas')

const spnUnblock = document.querySelectorAll('.spnUnblock')
const responseQuant = document.querySelectorAll('.responseQuant')
const titulo = document.querySelector('#titulo')
const erros = document.querySelector('#erros')
const divtimer = document.querySelector('#divtimer')
const divscore = document.querySelector('#divscore')
const divkeyboard = document.querySelector('#divkeyboard')
const selectTypeWord = document.querySelector('#selectTypeWord')
const selectLevel = document.querySelector('#selectLevel')
const wordActive = document.querySelectorAll('.wordActive')
const lvlActive = document.querySelectorAll('.lvlActive')

const impMenuSound = document.querySelector('#impMenuSound')
const myRangeMenuS = document.querySelector('#myRangeMenuS')
const impMusic = document.querySelector('#impMusic')
const impVoice = document.querySelector('#impVoice')
const impBgState = document.querySelector('.check-radio2').firstElementChild
const checkAvatar = document.querySelectorAll('.check-avatar')
const checkTeclado = document.querySelectorAll('.check-keyboard')


const posicoesOriginais = salvarPosicaoOriginal()
const getRandomIntegerInclusive = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
const alpha = /^Key/
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
var konamiIndex = 0;
var lastWord = ''
var lastLetters = []
var isPlay = false
var checkLastLetter
var charEqualLastWord
var arrayLetters; 
var enterPressed = false;
var countDown
var intervalBg
var intervalBgMS = 450
var intervalSpnTxt
var spanDicasChild = responseDicas.children
var childrenWithoutDisableSpan = responseDicas.querySelectorAll(':not(.disableSpan)');
var spanDicasLength = responseDicas.children.length
var spanDicasCounter = 1

const obsOptions = {
  root: null, // o root é o viewport (toda a área visível do navegador)
  rootMargin: '0px',
  threshold: 1.0 // aciona a intersecção quando a seção está completamente visível
};

spanDicasChild[0].style.display = 'block'
divBg.style.letterSpacing = `0`
window.getSelection().removeAllRanges(); // remover seleção de texto
document.querySelector('[tabindex="1"]').focus()
footerFunc()

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
	  if (entry.target.getAttribute('id') == 'play')if(allConfig.soundMusic === true)playMusic('audio/music04.mp3')//playselect ok
      if (entry.target.getAttribute('id') == 'options')if(allConfig.soundMusic === true && isPlay === false)playMusic('audio/music02.mp3')//options ok
      if (entry.target.getAttribute('id') == 'about')if(allConfig.soundMusic === true && isPlay === false)playMusic('audio/music02.mp3')//about ok
      if (entry.target.getAttribute('id') == 'menu')if(allConfig.soundMusic === true && isPlay === false)playMusic('audio/music01.mp3')//menu ok
      if (entry.target.getAttribute('id') == 'game')if(allConfig.soundMusic === true || musicAudio.paused && isPlay === false)playMusic('audio/music03.mp3')//newgame ok
    
	}
  });
}, obsOptions);

document.querySelectorAll('section')
.forEach(section => observer.observe(section));

/*█ AUDIO, MUSICA ███████████████████████████████████████████████████████████*/
var eventAudio = new Audio()
var musicAudio = new Audio()
	musicAudio.defaultMuted = true
	musicAudio.loop = true
	musicAudio.volume = allConfig.soundVolume;
	
function loadMusic(src) {
  musicAudio.src = src;
}

loadMusic('audio/music01.mp3');
loadMusic('audio/music02.mp3');
loadMusic('audio/music03.mp3');
loadMusic('audio/music04.mp3');

// Reproduz MUSICA
function playMusic(src) {

	loadMusic(src);
	if(allConfig.soundMusic === false)return;
	const playPromise = musicAudio.play()
	if (playPromise !== undefined) {
		playPromise.then(_ => {return false})
		.catch(error => {});
	}

}

// Reproduz SOM
function playEvent(src) {
	eventAudio.src = src;
	eventAudio.volume = allConfig.soundVolume;
	if(!allConfig.soundMenu) return;
	const playPromise = eventAudio.play();
	if (playPromise !== undefined) {
		playPromise.then(_ => {}).catch(error => {});
	}
}

function voiceFactory(text){
	if(!allConfig.voiceOn)return false;
	let utterance = new SpeechSynthesisUtterance(text);
	utterance.voice = speechSynthesis.getVoices()[0];
	//utterance.volume = allConfig.soundVolume
	speechSynthesis.speak(utterance);
	
	if (speechSynthesis.speaking) {
	  // Ativa a fala
	  speechSynthesis.resume();
	  console.log('A síntese de fala foi resumida.');
	}
	
	utterance.onend = function(event){
		console.log('A síntese de fala foi concluída.');
	};
}

/*███████████████████████████████████████████████████████████████████████████*/

function salvarPosicaoOriginal() {
	const divs = Array.from(selectTypeWord.querySelectorAll('div'));
	const posicoesOriginais = divs.map(div => {
		return {
			elemento: div,
			posicao: div.style.position
		};
	});
	return posicoesOriginais;
}


function footerFunc(){
	if(footer.offsetTop < document.querySelector('#selectTimer').offsetTop + 22 ){
		divSetaDown.addEventListener('click',()=>{
			game.scrollTo(0, game.offsetHeight + 22);
			divSetaDown.style.display= 'none';
		})
	}

	if(footer.offsetTop < document.querySelector('#divAvatars').offsetTop + 22 ){
		divSetaDown.addEventListener('click',()=>{
			options.scrollTo(0, options.offsetHeight + 22);
			divSetaDown.style.display= 'none';
		})
	}

	if(footer.offsetTop < about.lastElementChild.offsetTop + 22 ){
		divSetaDown.addEventListener('click',(e)=>{
			about.scrollTo(0, about.lastElementChild.offsetTop);
			divSetaDown.style.display= 'none';
		})
	}
}

document.addEventListener('mousedown', (e)=>{
	if(e.target === myRangeMenuS){
		//
	}else{e.preventDefault();}
	
})

if('ontouchstart' in document.documentElement){
	divSetaDown.src = "img/rowdown2.png"
}else{
	divSetaDown.src = "img/rowdown3.png"
};

document.addEventListener('contextmenu', (e)=>{
	e.preventDefault();
	if(divSetaDown.style.display === 'block') divSetaDown.style.display = 'none';
	pnlCtx.style.display = 'block';
	
	if(game.offsetParent){
		ctxOrganizar.style.display = 'flex'
		ctxOrganizar.focus()
		
	}
	if(menu.offsetParent){
		ctxOrganizar.style.display = 'none'
		ctxAtalhos.focus()
	}
	if(about.offsetParent){
		ctxOrganizar.style.display = 'none'
	}
	if(options.offsetParent){
		ctxOrganizar.style.display = 'none'
	}
	
	
	let setX = window.innerWidth - pnlCtx.offsetWidth
	let setY = window.innerHeight - pnlCtx.offsetHeight
	if(e.clientX >= setX){
		pnlCtx.style.left = setX - 1 + 'px'
			if(e.clientY >= setY){
				pnlCtx.style.top = setY + 'px'
			} else {
				pnlCtx.style.top = e.clientY + 'px'
			}
	} else {
		pnlCtx.style.left = e.clientX + 'px'
	}
	
	if(e.clientY >= setY){
		pnlCtx.style.top = setY - 1 + 'px'
			if(e.clientX >= setX){
				pnlCtx.style.left = setX + 'px'
			} else {
				pnlCtx.style.left = e.clientX + 'px'
			}
	} else {
		pnlCtx.style.top = e.clientY + 'px'
	}
})

ctxOrganizar.addEventListener('click', e => {
	if(game.offsetParent){
		salvarPosicaoOriginal()
		
		if(ctxOrganizar.firstElementChild.classList.contains('fa-arrow-down-a-z')){
			ctxOrganizar.firstElementChild.classList.remove('fa-arrow-down-a-z')
			ctxOrganizar.firstElementChild.classList.add('fa-arrow-up-z-a')
			
			const items = Array.from(selectTypeWord.querySelectorAll('div'));
			items.sort((a, b) => a.textContent.trim().localeCompare(b.textContent.trim()));
			selectTypeWord.innerHTML = ''; 
			items.forEach(item => selectTypeWord.appendChild(item));
			ctxOrganizar.lastChild.textContent = 'Reorganizar'
			selectTypeWord.firstElementChild.focus()
		} else {
			ctxOrganizar.firstElementChild.classList.remove('fa-arrow-up-z-a')
			ctxOrganizar.firstElementChild.classList.add('fa-arrow-down-a-z')
			
			selectTypeWord.innerHTML = ''; 
			Array.from(posicoesOriginais)
			.forEach(item => selectTypeWord.appendChild(item.elemento));
			ctxOrganizar.lastChild.textContent = 'Organizar alfabeticamente'
			selectTypeWord.firstElementChild.focus()
		}
		
	}
});
ctxAtalhos.addEventListener('click', e => {
	if (dialogAtalhos.hasAttribute('open')) return false;
		dialogAtalhos.showModal()
		dialogAtalhos.style.animationName = 'scale-up-bl'
		dialogAtalhos.addEventListener('animationend', animend);
		function animend(){
			dialogAtalhos.removeEventListener('animationend', animend);
			document.querySelector('#dialogDiv').scrollTop = 0
		}
	console.log(posicoesOriginais)
});
ctxInfo.addEventListener('click', e => {
	dialogInfo.showModal()
	dialogInfo.style.animationName = 'scale-up-bl'
	dialogInfo.addEventListener('animationend', animend);
	btnCloseDialog[0].focus()
	function animend(){
		dialogInfo.removeEventListener('animationend', animend);
		document.querySelector('#dialogDiv').scrollTop = 0
	}
});
ctxRefresh.addEventListener('click', e => {
	location.reload(true);
});


document.addEventListener('mousewheel', (e)=>{
	if(divSetaDown.style.display === 'block' && e.deltaY > 0){
		if(about.scrollTop > about.scrollHeight/5)divSetaDown.style.display = 'none';
		if(options.scrollTop > options.scrollHeight/5)divSetaDown.style.display = 'none';
		if(game.scrollTop > game.scrollHeight/5)divSetaDown.style.display = 'none';
	}else{return false}
})

about.addEventListener('touchmove', refreshTMove)
function refreshTMove(event){
	/* if(Math.round(event.timeStamp) > 3200){
		divSetaDown.style.display = 'none';
	} */
	if(about.scrollTop > about.scrollHeight/5)divSetaDown.style.display = 'none';
}


document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowDown') { // verifica se a tecla pressionada é a seta para baixo
    about.scrollTop += 50; // desce 50 pixels na barra de rolagem
	if(about.scrollTop > about.scrollHeight/5)divSetaDown.style.display = 'none';
  }
});

document.querySelector('#dialogDiv').addEventListener('focus', function(){
	event.preventDefault()
})

questionIco.addEventListener('click', ()=>{
	dialogInfo.showModal()
	dialogInfo.style.animationName = 'scale-up-bl'
	dialogInfo.addEventListener('animationend', animend);
	document.querySelectorAll('.btnCloseDialog')[0].focus()
	function animend(){
		dialogInfo.removeEventListener('animationend', animend);
		document.querySelector('#dialogDiv').scrollTop = 0
		document.querySelectorAll('.btnCloseDialog')[0].focus()
	}
	voiceFactory('Informações')
});



Array.from(btnCloseDialog).forEach(e =>{
	e.addEventListener('click', ()=>{
		e.parentElement.style.animationName = 'scale-down-bl'
		e.parentElement.addEventListener('animationend', animend);
		function animend(){
			e.parentElement.close();
			e.parentElement.removeEventListener('animationend', animend);
			//voiceFactory('iniciar um novo jogo')
		}
	});
})



/*██ LOCALSTORAGE ███████████████████████████████████████████████████████████*/
loadData()
function loadData(){
	//////		LOCALSTORAGE	//////////////////
	if(!localStorage.getItem("allConfig")){
		localStorage.setItem("allConfig", JSON.stringify(allConfig))
	} else {
		allConfig = JSON.parse(localStorage.getItem("allConfig"))
	}
}
var playerErrors = allConfig.difficultyType - 1
var currentScore = allConfig.pontos
var currentWins = allConfig.lastWinCounter
var currentWinRecond = allConfig.lastWinRecord
var currentMissoes = allConfig.arrMissoes;
var currentTeclado = allConfig.tecladoType;
var iconsError = [...Array(allConfig.difficultyType)].map((val, i) => '<img src="img/erro0.svg" class="iconserror" alt="crance">')
var unlockList = allConfig.arrMissoes.map(missao => Object.freeze(missao));
//'maxTouchPoints' in navigator && (navigator.maxTouchPoints === 0 || navigator.maxTouchPoints === null || navigator.maxTouchPoints === undefined)
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const isDesktop = !isMobile;
const isSmallScreen = window.innerWidth <= 820;
const isTouchDevice = ('maxTouchPoints' in navigator && navigator.maxTouchPoints > 0) ? true : false;

myRangeMenuS.addEventListener('change',volumeState)
myRangeMenuS.addEventListener('blur', musicState)
impMenuSound.addEventListener('change', musicState)
impMusic.addEventListener('change', musicState)
impBgState.addEventListener('change', funcAnimBgState)
impVoice.addEventListener('change', funcVoiceState)

impMenuSound.checked = allConfig.soundMenu
impMusic.checked = allConfig.soundMusic
impBgState.checked = allConfig.animBg
myRangeMenuS.value = allConfig.soundVolume
impVoice.checked = allConfig.voiceOn

if(isMobile){
	allConfig.animBg = false
	titulotopo.style.opacity = '0.989233'
	

	if (isSmallScreen) {
		// Faça algo para telas pequenas
		//menuBtn playBtn playBtn selectBtn restartBtn
		var buttons = [menuBtn, playBtn, selectBtn, restartBtn];
		document.querySelector('#divkeyboard').setAttribute('style', 'max-height: 40vh;')
		
		
		for (var i = 0; i < buttons.length; i++) {
			
			buttons[i].title = buttons[i].textContent
			buttons[i].style.flexDirection = 'column-reverse';
			menuBtn.firstElementChild.style.display = 'none';
			
		}
		menuBtn.style.flexDirection = 'column-reverse'
		menuBtn.textContent = ''
		selectBtn.textContent = ''
		restartBtn.textContent = ''
		
		console.log('is small')
	} else {
		// Faça algo para telas grandes
	}
	
}

setTimeout(()=>{
	titulotopo.style.opacity = '0.989233'
	document.querySelector('#titulotopo').style.top = "5.5vh"
	document.querySelector('#titulotopo').style.color = "rgb(194,255,233,0.9)"
	document.querySelector('#menuLinks').style.marginBottom = "5vh"
},7098)

setTimeout(()=>{
	
	//titulotopo.style.letterSpacing = '.4rem'
	assinatura.style.opacity = '0.069233'
	assinatura.style.animationPlayState = 'paused'
	if(!isMobile)divBg.style.opacity = '0.05419233'
	//divBg.style.mixBlendMode = 'color-burn'
	//divBg.style.textShadow = '.5em 0px 99px #000'
	if(intervalBg === undefined || intervalBg === null){
	 var intervalBg = setInterval(funcIntervalBg,intervalBgMS)
	}
	
	if(intervalSpnTxt === undefined || intervalSpnTxt === null){
	 var intervalSpnTxt = setInterval(funcIntervalSpnTxt,4600)
	}
	responseDicas.style.display = "flex";
	//console.log(allConfig.animBg ? true : false); // correto
	
},8300)
function funcIntervalBg(){
	if(allConfig.animBg === false){
		divBg.style.opacity = '0';//
		clearInterval(intervalBg)
		
	}
	let bgArr = []
	for(let i = 0; i<256;i++){
		bgArr.push(String.fromCharCode(97 + Math.floor(Math.random() * 26)))
	}
	let titleGame = document.querySelector('#titulotopo').textContent.replace(/\s/g, '').toUpperCase()
	
	//if(isMobile){divBg.textContent = titleGame.replace(/\s/g, '').toUpperCase();intervalBgMS = intervalBgMS/16.666666666666668;return;}
	divBg.textContent = `${titleGame}`+(bgArr.toString().split().join('').replaceAll(',',''))+(bgArr.toString().split().join('').replaceAll(',',''))
	//
}
function funcIntervalSpnTxt(){
	
	if (isMobile) {
		let e = document.querySelector('.disableDica');

		while (e) {
			e.parentNode.removeChild(e);
			e = document.querySelector('.disableDica');
		}
		
		spanDicasLength = responseDicas.querySelectorAll(':not(.disableDica)').length
		//console.log('mobi',spanDicasLength)
		
	} else if (isDesktop) {
		
		spanDicasLength = responseDicas.children.length
		//console.log('desk')
		
	}
	
	Array.from(spanDicasChild).forEach((e,ind,arr)=>{
		e.style.display = 'none'
		if(arr[ind] == spanDicasChild[spanDicasCounter])arr[ind].style.display = 'block'
	})
	
	//spanDicasChild[spanDicasCounter].style.display = 'block'
	spanDicasCounter+=1;
	
	if(spanDicasCounter > (spanDicasLength - 1)){
		spanDicasCounter = 1;
	}
	
}

if ('ontouchstart' in window) {
  document.addEventListener('touchcancel', changePanel)
  
} 

document.addEventListener('click', (event)=>{
	let eTarget = event.target
	let tagName = event.target.tagName.toLowerCase();

	if(eTarget.classList.contains('wordDisabled') || eTarget.parentElement.classList.contains('wordDisabled'))return;
	if(eTarget.classList.contains('cardNotify') || eTarget.parentElement.classList.contains('cardNotify')){
		ulNotify.style.display = 'block';
		if(tagName === 'h4' || tagName === 'img' || tagName === 'span'){
			
			const areAllHidden = [...cardNotify].every(card => getComputedStyle(card).display === 'none');
			eTarget.parentElement.style.display = 'none'
			document.querySelector('#tab-1').click()
			if (areAllHidden) {
				ulNotify.style.display = 'none';
			} else {
				ulNotify.style.display = 'block';
			}
			allConfig.newNotify = false;
		}
		//ulNotify.style.display = 'none';

		console.log(tagName);
		return;
	}
	changePanel()
})

for (const img of document.querySelectorAll("img")) {
  img.draggable = false;
}

var m1 = document.querySelector('[data-typeActive="4"]')
var m2 = document.querySelector('[data-typeActive="5"]')
var m3 = document.querySelector('[data-typeActive="6"]')
var m4 = document.querySelector('[data-typeActive="7"]')
var m5 = document.querySelector('[data-typeActive="8"]')
var m6 = document.querySelector('[data-typeActive="9"]')
var m7 = document.querySelector('[data-typeActive="10"]')
var m8 = document.querySelector('[data-typeActive="11"]')

function habilitarLista() {
	
	const missionImgs = [
		{ element: m1, imgSrc: "img/frutas.png", index: 0 },
		{ element: m2, imgSrc: "img/profissao.png", index: 1 },
		{ element: m3, imgSrc: "img/marcas.png", index: 4 },
		{ element: m4, imgSrc: "img/mercado.png", index: 4 },
		{ element: m5, imgSrc: "img/longa.png", index: 5 },
		{ element: m6, imgSrc: "img/bebida.png", index: 6 },
		{ element: m7, imgSrc: "img/verbo.png", index: 6 },
		{ element: m8, imgSrc: "img/all.png", index: 7 },
	];

	missionImgs.forEach(({ element, imgSrc, index },ind) => {

		if(spnUnblock[ind] === document.querySelector('.spnTotal')&& allConfig.arrMissoes[ind] === false){
			element.firstElementChild.src = "img/cadeadoico.png";return;
		}
	
		spnUnblock[ind].setAttribute('style', 'background:none;-webkit-background-clip: padding-box;-webkit-text-fill-color: transparent;')
		spnUnblock[ind].nextElementSibling.setAttribute('style', 'background:none;-webkit-background-clip: padding-box;-webkit-text-fill-color: transparent;')
		if (allConfig.arrMissoes[ind] === true) {
			spnUnblock[ind].classList.remove('spnBlur')
			spnUnblock[ind].nextElementSibling.classList.remove('spnBlur2')
			element.firstElementChild.src = imgSrc;
			spnUnblock[ind].setAttribute('style', 'filter:blur(0pt);-webkit-background-clip: text;')
			spnUnblock[ind].nextElementSibling.setAttribute('style', 'filter:blur(0pt);-webkit-background-clip: text;')
			element.classList.remove("wordDisabled");
		} else if (element.classList.contains("wordDisabled")) {
			element.firstElementChild.src = "img/cadeadoico.png";
			
		}
		
	});
	notificar()
}

function notificar(){
	let hasChanged = false;

	for (let i = 0; i < allConfig.arrMissoes.length; i++) {
		if (allConfig.arrMissoes[i] !== unlockList[i]) {
			hasChanged = true;
			document.querySelectorAll('.cardNotify')[i].style.display = 'flex';
		} else {
			//document.querySelectorAll('.cardNotify')[i].style.display = 'none';
		}
	}

	if (hasChanged) {
		pnlNotify.style.display = 'block'
		allConfig.newNotify = true;
		unlockList = allConfig.arrMissoes.map(missao => Object.freeze(missao));
		
	} else {
		allConfig.newNotify = false;
	}	
}

document.onselectstart = e => {e.preventDefault()} // remover seleção de texto
//document.oncontextmenu = e => {return false} // remover contextmenu

function copyPix(eTarg){
	console.log(eTarg)
	const text = eTarg.lastElementChild.textContent;
	navigator.clipboard.writeText(text)
	.then(() => console.log('Texto copiado com sucesso!'))
	.catch(err => console.error('Erro ao copiar texto: ', err));
	
	//eTarg.lastElementChild.textContent.select();
	//document.execCommand("copy");
	
}

document.addEventListener('focus', (event) => {
	if(event.target.dataset.lvlactive) changeConfig(event.target)
	if(event.target.dataset.typeactive) changeConfig(event.target)
}, false);

// KEYDOWN EVENTS - teclas do teclado
document.addEventListener('keydown', evKeyboard)

 document.addEventListener('mouseup', e =>{
	//tocarMusica()
 })
 
document.addEventListener("keyup", e => {
	e.preventDefault();
	enterPressed = false;
	
	if (document.activeElement === questionIco &&
	(e.code === 'Enter' || e.code === 'Space') ||
	(e.key === 'i' || e.key === 'I') && !play.offsetParent){
		if (dialogInfo.hasAttribute('open')) return false;
		dialogInfo.showModal()
		dialogInfo.style.animationName = 'scale-up-bl'
		dialogInfo.addEventListener('animationend', animend);
		function animend(){
			dialogInfo.removeEventListener('animationend', animend);
			btnCloseDialog[0].focus()
		}
	}
	if((e.key === 'ç' || e.key === 'Ç') && play.offsetParent){
		divkeyboard.querySelector('#letterC').focus()
		trigger('C')
	}
	
	if((e.key === 'p' || e.key === 'P') && !play.offsetParent){
		document.querySelector('[data-playBtn="play"]').click()
	}
	
	if((e.key === 'm' || e.key === 'M') && !play.offsetParent){
		e.preventDefault();
		if (myRangeMenuS.valueAsNumber === 0)return;
		allConfig.soundMusic = !allConfig.soundMusic;
		impMusic.checked = allConfig.soundMusic;
		allConfig.soundMusic ? musicAudio.play() : musicAudio.pause();
		musicState();
	}
	
	if((e.key === 's' || e.key === 'S' || e.key === 'n' || e.key === 'N') && !play.offsetParent){
		document.querySelector('#tab-1').click();
	}
	if((e.key === 'o' || e.key === 'O') && !play.offsetParent){
		document.querySelector('#tab-2').click();
	}
	if((e.key === 'e' || e.key === 'E') && !play.offsetParent){
		document.querySelector('#tab-3').click();
	}
	
	if((e.key === 'f' || e.key === 'F') && !play.offsetParent){
		document.querySelector('#fullIco').click();
	}
	
	if((e.key === 'a' || e.key === 'A') && !play.offsetParent){
		//if(konamiIndex > 9)
		if (dialogAtalhos.hasAttribute('open')) return false;
		dialogAtalhos.showModal()
		dialogAtalhos.style.animationName = 'scale-up-bl'
		dialogAtalhos.addEventListener('animationend', animend);
		function animend(){
			dialogAtalhos.removeEventListener('animationend', animend);
			
		}
	}
	
	
	if(e.key === 'MediaPlayPause'){
		e.preventDefault();
		if (myRangeMenuS.valueAsNumber === 0)return;
		allConfig.soundMusic = !allConfig.soundMusic;
		impMusic.checked = allConfig.soundMusic;
		allConfig.soundMusic ? musicAudio.play() : musicAudio.pause();
		musicState();
	}
	
	if(e.key === 'VolumeUp' || e.code === 'VolumeUp'){}
	if(e.key === 'MediaVolumeDown'){console.log(e.key,e.code)}
	if(e.key === 'MediaVolumeMute'){console.log(e.key,e.code)}
	
	
	
});

document.addEventListener('keydown', function(event) {
	const key = event.code;
	const capsLockOn = event.getModifierState('CapsLock');

	if (key === konamiCode[konamiIndex] || (capsLockOn && key === 'Key' + konamiCode[konamiIndex].toUpperCase())) {
	konamiIndex++;

		if (konamiIndex === konamiCode.length) {
			console.log('Konami code ativado!');
			allConfig.arrMissoes = [true,true,true,true,true,true,true,true];
			habilitarLista();
			document.querySelector('#tab-1').click();
			konamiIndex = 0;
		}
	} else {
	konamiIndex = 0;
	}
});

function evKeyboard(e){
	
	var elementActived = document.activeElement
	var nArray = Array.from(divkeyboard.children)
	.filter((element,index,array) =>{
		if(array[index].getAttribute('tabindex')) return array[index]
	})
	
	
	if (e.code === 'PageDown' && document.querySelector('#dialogInfo').open) {
		e.preventDefault();
		document.querySelector('#dialogDiv').scrollTop += 80
	} else {divSetaDown.style.display = 'none'}
	
	if (e.code === 'PageUp' && document.querySelector('#dialogInfo').open) {
		e.preventDefault();
		document.querySelector('#dialogDiv').scrollTop -= 80
	} else {divSetaDown.style.display = 'none'}
	
	if (e.code === "ContextMenu") {
		console.log("A tecla 'ContextMenu' foi pressionada.");
		
		if(pnlCtx.style.display === ''){
			pnlCtx.style.display = 'block';
			pnlCtx.style.width = pnlCtx.offsetWidth+'px'
			pnlCtx.style.height = pnlCtx.offsetHeight + 'px'
			pnlCtx.style.left = 0
			pnlCtx.style.top = 0
		}
		
		pnlCtx.style.display = 'block'
		pnlCtx.offsetLeft = (window.innerWidth / 2) - (pnlCtx.clientWidth / 2);
		pnlCtx.offsetTop = (window.innerHeight / 2) - (pnlCtx.clientHeight / 2);
	
		
	
	
	console.log(pnlCtx.style.width,pnlCtx.style.height)
	
	
	}
	
	if(!enterPressed && (e.code === 'Enter' || e.code === 'Space')) {
		enterPressed = true;
		if (elementActived.className == 'letter' && isPlay === true){
			elementActived.click()
		}
		if (elementActived.dataset.panel) elementActived.click()
		if (elementActived.dataset.typeactive){
			changeConfig(elementActived)
			document.querySelector('.lvlActive').focus()
		}
		if (elementActived.dataset.lvlactive){
			changeConfig(elementActived)
			document.querySelector('.timerActive').focus()
		}
		if (elementActived.dataset.timeractive){
			changeConfig(elementActived)
			document.querySelectorAll('[data-avataractive][checked="true"]')[0].focus()
		}
		if (elementActived.dataset.avataractive){
			avatarState(elementActived)
			document.querySelector('[data-playBtn="play"]').focus();
		}
		
		
		if (elementActived.dataset.playbtn)playBtn.click()
		if (elementActived === impMenuSound){elementActived.click();elementActived.focus();}
		if (elementActived === impMusic)elementActived.click();
		if (elementActived === animacao)elementActived.click();
		if (elementActived.dataset.tecladoactive)document.querySelector('[data-playBtn="menu"]').click();
		if (elementActived === statsGame.lastElementChild)liConquistas[0].focus();
		if (elementActived === ulConquistas.lastElementChild)statsWords.focus();
		
		
	}
	
	if(e.code === 'ArrowUp' || e.code === 'ArrowLeft') {
		
		if(elementActived.previousElementSibling != null){
			while(elementActived.previousElementSibling.classList.contains('wordDisabled')){elementActived = elementActived.previousElementSibling};
			if(elementActived.classList.contains('letter')){
				if(elementActived == nArray[0]) nArray[nArray.length - 1].focus()
				while(!elementActived.previousElementSibling.getAttribute('tabindex') && 
				elementActived != nArray[0]){
					elementActived = elementActived.previousElementSibling
				}
			}
			elementActived.previousElementSibling.focus()
		} else {
			if(elementActived.parentElement.lastElementChild.classList.contains('wordDisabled')){
				elementActived = elementActived.parentElement.lastElementChild
				while(elementActived.classList.contains('wordDisabled')){
					elementActived = elementActived.previousElementSibling;
					elementActived.focus()
					console.log(elementActived);
				}
				return
			} else {
				elementActived.parentElement.lastElementChild.focus()
			}
		}
		if(document.querySelector('#dialogInfo').open){
			document.querySelector('#dialogDiv').scrollTop -= 18 
		}
		if(elementActived === document.querySelector('[data-panel="menu"]') && about.offsetParent){
			e.preventDefault()
			about.scrollTop -= 50 
		}
		cancelScrolls()
	}
	
	if(e.code === 'ArrowDown' || e.code === 'ArrowRight') {
		
		if(elementActived.nextElementSibling != null){
			while(elementActived.nextElementSibling.classList.contains('wordDisabled')){
				elementActived = elementActived.nextElementSibling
				if(elementActived.nextElementSibling == null){
					selectTypeWord.firstElementChild.focus()
					return;
				}
			};
			if(elementActived.classList.contains('letter')){
				if(elementActived == nArray[nArray.length -1]) changeKeyboardIndex()
				while(!elementActived.nextElementSibling.getAttribute('tabindex') && 
				elementActived != nArray[nArray.length -1]){
					elementActived = elementActived.nextElementSibling;
				}
			}
			elementActived.nextElementSibling.focus()
		} else {
			if(elementActived.parentElement.firstElementChild.classList.contains('wordDisabled')){
				elementActived = elementActived.parentElement.firstElementChild
				while(elementActived.classList.contains('wordDisabled')){
					elementActived = elementActived.nextElementSibling;
					elementActived.focus()
					console.log(elementActived);
				}
				return
			} else{
				elementActived.parentElement.firstElementChild.focus()
			}
		}
		if(document.querySelector('#dialogInfo').open){
			document.querySelector('#dialogDiv').scrollTop += 18
		}
		cancelScrolls()
	}
	
	if(e.code === 'Escape' || e.code === 'Backspace') {
		Timer.clr()
		footer.firstElementChild.click()
	}
	
	if((isPlay === true) && (alpha.test(e.code))){
		// recuperar tecla digitada
		let palpite = e.code[e.code.length - 1].toUpperCase()
		trigger(palpite)
		
	}
	
	function cancelScrolls(){
		if (elementActived.dataset.typeactive ||
		elementActived.dataset.lvlactive ||
		elementActived.dataset.timeractive){
			e.preventDefault();
		}
		
	}
	
}

function removeAcento (text){       
    text = text.toLowerCase();                                                         
    text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
    text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
    text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
    text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
    text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
    text = text.replace(new RegExp('[Ç]','gi'), 'c');
    return text;                 
}

function letterEqual(palpite){
	
	// substituir index pelo palpite
	lastWord.split("").forEach((element,index,array) => {
		if(array[index].normalize("NFD").replace(/[\u0300-\u036f]/g, "") == palpite ||
		array[index].normalize("NFD").replace(/[\u00E0-\u00FF]/g, "") == palpite) {
			h2.children[index].textContent = array[index]
			h2.children[index].style.color = '#7cff7c'
			let spnPlusScore = document.createElement('SPAN')
			spnPlusScore.setAttribute('class', 'spnPlusScore')
			spnPlusScore.textContent = '+2'
			currentScore+=2
			divscore.textContent = currentScore
			spnPlusScore.addEventListener('animationend', ()=>{
				spnPlusScore.remove()
			})
			h2.children[index].appendChild(spnPlusScore)
			
		}
	})
	
	// se todas as letras forem exibidas na h2
	const checkAllCorrect = Array.from(h2.children)
	.every((element,index,array) => array[index].textContent != '_')
	
	if(checkAllCorrect) {
		if(playerErrors + 1 === parseInt(document.querySelector('.lvlActive').dataset.lvlactive)){
			titulo.textContent = `Perfeito!
			Acertou todas as letras!`
		} else{
			titulo.textContent = `Você acertou!`
		}
		
		
		animWord('blinker')
		++currentWins
		if(parseInt(currentWins) >= parseInt(currentWinRecond)){
			currentWinRecond = currentWins
		}
			
		allConfig.lastWinCounter = currentWins
		allConfig.lastWinRecord = currentWinRecond
	localStorage.setItem("allConfig", JSON.stringify(allConfig))
		document.querySelector('#corda').style.display = 'none'
		expressionWin()
		
		
		soundEasterEgg(true)
		
		//voiceFactory(titulo.textContent)
		//voiceFactory('a palavra era: '+ h2.textContent)
	} else {
		playEvent('audio/letterClick.mp3')
	}
}

function expressionWin(){
	document.querySelector('#layer2').style.animationPlayState = 'paused'
	document.querySelector('#boca').style.transform = 'matrix(0.97192917,-0.23527366,-0.49769435,-2.0560043,45.570405,287.40427)';
	document.querySelector('#bracoLeft').style.display = 'block';
	document.querySelector('#bracoRight').style.display = 'block'
	document.querySelector('#pernaLeft').style.display = 'block'
	document.querySelector('#pernaRight').style.display = 'block'
	document.querySelector('#tronco').style.display = 'block'
	document.querySelector('#base').style.display = 'none'
	document.querySelector('#path1').style.display = 'none'
}

function animWord(blinker){
	
	
	isPlay = false
	musicAudio.pause()
	Timer.clr()
	h2.style.animationName = blinker
	h2.ariaLabel = `a palavra é ` + lastWord
	//divkeyboard.ariaHidden = true
	h2.addEventListener('animationend', blinkEnd)
	Array.from(h2.children).forEach( (el, index) => {
		el.removeAttribute('style')
		if (playerErrors == 0)el.textContent = lastWord[index]
	})
	blinker == 'blinker' ? allConfig.acertadas+=1 : allConfig.erradas+=1
	allConfig.totalJogos = allConfig.acertadas + allConfig.erradas
	allConfig.pontos = currentScore
	
	localStorage.setItem("allConfig", JSON.stringify(allConfig))
	habilitarLista()
	//console.log(localStorage.getItem("allConfig"))
	
}

function blinkEnd(){
	voiceFactory(h2.textContent+'. '+titulo.textContent+'!')
	h2.removeEventListener('animationend', blinkEnd)
	document.querySelector('[data-restartBtn="play"]').style.display = 'flex'
	document.querySelector('[data-selectBtn="game"]').style.display = 'flex'
	document.querySelector('[data-restartBtn="play"]').focus()
	/* setTimeout(()=>{
		afterGameover()
	},5800) */
}
let eColor
function trigger(palpite) {
  const checkLastLetter = lastLetters.includes(palpite);
  if (!checkLastLetter) {
    const charEqualLastWord = lastWord.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .split('')
      .filter(
        (v) =>
          palpite.normalize('NFD').replace(/[\u00E0-\u00FF]/g, '') === v ||
          palpite.normalize('NFD').replace(/[\u0300-\u036f]/g, '') === v
      );
    lastLetters.push(palpite.normalize('NFD').replace(/[\u0300-\u036f]/g, ''));
	
	let letterElem = Array.from(divkeyboard.children).find(
		(element) => element.firstChild.textContent.toUpperCase() === palpite
	);
	
	 eColor = new Boolean();
	
	if(charEqualLastWord.length === 0){
		letterNotEqual(charEqualLastWord)
		eColor = false
	} else{
		letterEqual(palpite);
		eColor = true
	}
	voiceFactory(eColor === true ? 'letra '+palpite+'; ...correta' : 'letra '+palpite+'; ...errada')
	
	removeLetterColor(letterElem,eColor);
  }
  habilitarLista()
}

// exibir erro ✕ ○
function letterNotEqual(charEqualLastWord){
	
	
	let spnMinusScore = document.createElement('SPAN')
	spnMinusScore.setAttribute('class', 'spnMinusScore')
	spnMinusScore.textContent = '-2'
	
	
	currentScore-=2
	currentScore <= 0 ? currentScore = 0 : currentScore = currentScore
	divscore.textContent = currentScore
	allConfig.pontos = currentScore
	
	spnMinusScore.addEventListener('animationend', ()=>{
		spnMinusScore.remove()
	})
	


	animateAvatar()
	
	erros.children[playerErrors].setAttribute('src', 'img/erro1.svg')
	erros.children[playerErrors].style.animationName = 'errorscale'
	if(playerErrors > 0){
		--playerErrors
		playEvent('audio/letterClick2.mp3')
	} else {
		
		titulo.textContent = `Você perdeu.`
		animWord('blinker2')
		currentWins = 0
		allConfig.lastWinCounter = currentWins
		voiceFactory(titulo.textContent)
		soundEasterEgg(false)
	
	}
	divscore.appendChild(spnMinusScore)
	localStorage.setItem("allConfig", JSON.stringify(allConfig))

}

function vibrar(vibms){
		// Verifica se o dispositivo suporta a API de vibração
	if ("vibrate" in navigator) {
		// Vibrar por vibms milissegundos (1 segundo)
		navigator.vibrate(vibms);
		console.log('teste vibrate')
	} else {
		return;
	}
}

function soundEasterEgg(win) {
  const easterEggs = {
    BRASIL: 'brasil.mp3',
    BEMTEVI: 'bemtevi.mp3',
    CAVALO: 'cavalo.mp3',
    BURRO: 'burro.mp3',
  };
  
  const keyword = lastWord.toUpperCase();
  
  if (allConfig.soundMenu && easterEggs[keyword]) {
    playEvent(`audio/${easterEggs[keyword]}`);
    return;
  }
  
 playEvent(win ? 'audio/effect3.mp3' : 'audio/lose.mp3');
}

function animateAvatar(){
	//let arrErros = [...Array(allConfig.difficultyType)].map((val, i) => playerErrors)
	
	if(allConfig.difficultyType === 3){
		if(playerErrors === 2){
			document.querySelector('#bracoLeft').style.display = 'block'
			document.querySelector('#bracoRight').style.display = 'block'
		}
		if(playerErrors === 1){
			document.querySelector('#tronco').style.display = 'block'
		}
		if(playerErrors === 0){
			document.querySelector('#pernaLeft').style.display = 'block'
			document.querySelector('#pernaRight').style.display = 'block'
		}
	}
	
	if(allConfig.difficultyType === 5){
		if(playerErrors === 4){
			document.querySelector('#bracoLeft').style.display = 'block'
		}
		if(playerErrors === 3){
			document.querySelector('#bracoRight').style.display = 'block'
		}
		if(playerErrors === 2){
			document.querySelector('#tronco').style.display = 'block'
		}
		if(playerErrors === 1){
			document.querySelector('#pernaLeft').style.display = 'block'
		}
		if(playerErrors === 0){
			document.querySelector('#pernaRight').style.display = 'block'
		}
	}
	
	if(allConfig.difficultyType === 7){
		if(playerErrors === 6){
			document.querySelector('#bracoLeft').style.display = 'block'
		}
		if(playerErrors === 4){
			document.querySelector('#bracoRight').style.display = 'block'
		}
		if(playerErrors === 2){
			document.querySelector('#tronco').style.display = 'block'
		}
		if(playerErrors === 1){
			document.querySelector('#pernaLeft').style.display = 'block'
		}
		if(playerErrors === 0){
			document.querySelector('#pernaRight').style.display = 'block'
		}
	}
	
	if(playerErrors === 0){
		document.querySelector('#bracoLeft').style.display = 'block'
		document.querySelector('#bracoRight').style.display = 'block'
		document.querySelector('#pernaLeft').style.display = 'block'
		document.querySelector('#pernaRight').style.display = 'block'
		document.querySelector('#tronco').style.display = 'block'
		
		document.querySelector('#boca2').style.display = 'block'
		document.querySelector('#olhoLeft2').style.display = 'block'
		document.querySelector('#olhoRight2').style.display = 'block'
		document.querySelector('#olhoLeft').style.display = 'none'
		document.querySelector('#olhoRight').style.display = 'none'
		
	}
}

function changeConfig(eTarg){
	if(eTarg.classList.contains('avtDisabled'))return;
	if(eTarg.dataset.typeactive || eTarg.classList.contains('themeIcon')) {
		document.querySelectorAll('.wordActive')[0].firstElementChild.style.filter = "none"
		document.querySelectorAll('.wordActive')[0].setAttribute('aria-checked', 'false')
		document.querySelectorAll('.wordActive')[0].classList.remove('wordActive')
		allConfig.wordsType = eTarg.dataset.typeactive
		eTarg.firstElementChild.style.filter = `invert(100) hue-rotate(178deg) drop-shadow(0px 0px .4rem #248fff)`
		eTarg.setAttribute('aria-checked', 'true')
		eTarg.classList.add('wordActive')
	}
	
	if(eTarg.dataset.lvlactive) {
		document.querySelectorAll('.lvlActive')[0].setAttribute('aria-checked', 'false')
		document.querySelectorAll('.lvlActive')[0].classList.remove('lvlActive')
		allConfig.difficultyType = parseInt(eTarg.dataset.lvlactive)
		eTarg.setAttribute('aria-checked', 'true')
		eTarg.classList.add('lvlActive')
	}
	
	if(eTarg.dataset.timeractive) {
		document.querySelector('.timerActive').setAttribute('aria-checked', 'false')
		document.querySelector('.timerActive').classList.remove('timerActive')
		allConfig.timerType = parseInt(eTarg.dataset.timeractive) || null
		eTarg.classList.add('timerActive')
		if(eTarg == document.querySelector("[data-timerActive='NaN']")){
			document.querySelector("[data-timerActive='NaN']")
			.setAttribute('aria-label', 'Temporizador desligado')
		} else {
			document.querySelector("[data-timerActive='NaN']")
			.setAttribute('aria-label', 'Desligar temporizador')
		}
		eTarg.setAttribute('aria-checked', 'true')
	}
	
	playerErrors = allConfig.difficultyType - 1
	eTarg.focus()
	//console.log(musicAudio)
	
	
}

function changePanel(){
	habilitarLista();
	var eTarg = event.target
	let tagName = event.target.tagName.toLowerCase();
	if(eTarg.classList.contains('avtDisabled'))console.log('teste');
		//if()voiceFactory(eTarg.textContent)
	if(pnlCtx.style.display === 'block')pnlCtx.style.display = 'none';
	
	if(eTarg.dataset.summary || eTarg.dataset.donatedetails)copyPix(summary)
	
	if(isPlay){
		if(eTarg.className == 'letter') trigger(eTarg.textContent.toUpperCase())
		if(allConfig.newNotify === true)pnlNotify.style.display = 'block';
	}
	if(eTarg.classList.contains('themeIcon'))changeConfig(eTarg.parentElement)
	if(eTarg.dataset.lvlactive) changeConfig(eTarg)
	if(eTarg.dataset.typeactive) changeConfig(eTarg)
	if(eTarg.dataset.timeractive) changeConfig(eTarg)
	if(eTarg.dataset.selectbtn){changeConfig(eTarg)}
	if(eTarg.dataset.playbtn){
		afterGameover()
		initGame()
		
	} 
	if(eTarg.dataset.restartbtn){
		afterGameover()
		initGame()
		playMusic('audio/music04.mp3')
		document.querySelector('[data-restartBtn="play"]').style.display = 'none'
	} 
	
	
	//se não houver dataset: return false
	if(!eTarg.dataset.panel) return false
	
	//console.log(document.activeElement.firstChild.textContent)
	
	//remover classe active
	Array.from(main.children).forEach((index)=>{
		if(index.classList == 'active') index.classList.remove("active")
	})
	
	//adicionar classe active 
	document.getElementById(eTarg.dataset.panel).classList.add("active")
	
	game.getAttribute('class') == 'active' ? 
	(playBtn.style.display = 'flex') : 
	(playBtn.style.display = 'none')
	
	if(eTarg.dataset.panel != 'menu'){
		menuLinks.ariaLabel = 'Menu do jogo'
		footer.style.display = 'inline-flex'
		footer.style.position = 'fixed'
		/* if(!impBgState.checked){divBg.style.opacity = '0.919233'}else{divBg.style.opacity = '0'}
		divBg.style.mixBlendMode = 'color-burn'
		divBg.style.backdropFilter = 'blur(1.5px);' */
		divSetaDown.style.display = 'block';
		//console.log(footer.offsetTop,selectTimer.offsetTop);
		
	} else {
		footer.style.display = 'none';
		divSetaDown.style.display = 'none';
		
	}
	
	linkFocus(eTarg)
	
}

function linkFocus(eTarg){
	
	let sections = document.querySelector('.active')
	if(sections.scrollHeight <= sections.offsetHeight){
		sections.parentElement.style.overflowY = "hidden"
	} else {sections.parentElement.style.overflowY = "overlay!important"}
	//console.log(sections.scrollHeight, sections.offsetHeight)
	
	if (game.offsetParent){
		
		document.querySelector('[data-restartBtn="play"]').style.display = 'none'
		document.querySelector('#selectTypeWord').children[parseInt(allConfig.wordsType)].click()
		document.querySelector('#selectTypeWord').children[parseInt(allConfig.wordsType)].focus()
		
		game.scrollTop = 0
		game.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
			inline: 'start'
		})
		//playMusic('audio/music03.mp3');
		
	}
	if (menu.offsetParent) {
		document.querySelector('#fullIco').style.display = 'block'
		document.querySelector('[data-restartBtn="play"]').style.display = 'none'
		
		body.setAttribute('style','background:linear-gradient(172deg, rgba(94,76,129,1) 0%, rgba(14,0,55,1) 25%, rgba(0,71,124,1) 75%, rgba(94,76,129,1) 100%)')
		afterGameover()
		document.querySelector('#tab-1').focus()
		//playMusic('audio/music01.mp3');
		//musicState()
	} else {
		//document.querySelector('#fullIco').style.display = 'none'
		body.setAttribute('style','background:radial-gradient(circle, rgba(14,0,55,1) 0%, rgba(0,71,124,1) 95%)')
	}
	if (options.offsetParent){
		document.querySelector('[data-restartBtn="play"]').style.display = 'none'
		impMenuSound.checked = allConfig.soundMenu
		impMusic.checked = allConfig.soundMusic
		impBgState.checked = allConfig.animBg
		myRangeMenuS.value = allConfig.soundVolume
		
		
		
		document.querySelector('#options').scrollIntoView({
			behavior: 'smooth',
			block: 'start',
			inline: 'start'
		})
		//document.querySelector('[data-avatarActive="'+allConfig.avatarType+'"]').focus()
		//options.focus()
		//playMusic('audio/music02.mp3');
		impMenuSound.focus()
		
		
	} 
	if (about.offsetParent){
		
		//document.querySelector('[data-author]').focus()
		document.querySelector('[data-restartBtn="play"]').style.display = 'none'
		statsGame.children[0].firstElementChild.textContent = allConfig.pontos
		statsGame.children[1].firstElementChild.textContent = allConfig.acertadas
		statsGame.children[2].firstElementChild.textContent = allConfig.erradas
		statsGame.children[3].firstElementChild.textContent = allConfig.totalJogos
		statsGame.children[4].firstElementChild.textContent = allConfig.lastWinCounter
		statsGame.children[5].firstElementChild.textContent = allConfig.lastWinRecord
		
		refreshMission()
		
		//CONTAR PALAVRAS
		const wordTypesRef = [
		wordType_Objeto,
		wordType_Animal,
		wordType_Pais,
		wordType_Carro,
		wordType_Frutas,
		wordType_Profissao,
		wordType_Marcas,
		wordType_Mercado,
		wordType_Longas,
		wordType_Bebidas,
		wordType_Verbos,
		wordType_All];
		
		for (let i = 0; i < responseQuant.length; i++) {
		responseQuant[i].textContent = wordTypesRef[i].length;
		}
		
		
		
		document.querySelector('#about').scrollTop = 0
		document.querySelector('#estatisticas').scrollIntoView({
			behavior: 'smooth',
			block: 'start',
			inline: 'start'
		})
		document.querySelector('#about').scrollTop = 0
		
		statsGame.firstElementChild.focus()
		//playMusic('audio/music02.mp3');
	}
	if (play.offsetParent) {
		divSetaDown.style.display = 'none';
		if(isPlay){
			divkeyboard.firstElementChild.focus()
		} 
		
	} else {
		document.querySelector('[data-selectBtn="game"]').style.display = 'none'
	}
	
	if (eventAudio.readyState >= 2){
	  playEvent('audio/menuClick.mp3')
	}
	
	playEvent('audio/menuClick.mp3')
	
}

Array.from(checkAvatar).forEach((e,ind,arr) =>{
	e.addEventListener('click',()=>{avatarState(e)})
	e.classList.add('avtDisabled')
	e.setAttribute('aria-checked', 'false')
	
	if(e.dataset.avataractive == allConfig.avatarType){
		e.classList.remove('avtDisabled')
		e.setAttribute('aria-checked', 'true')
		e.setAttribute('checked', true)
		e.lastElementChild.classList.remove('fa-lock')
		e.lastElementChild.classList.add('fa-check')
	}
})

/*██ ESTADO, OPÇÕES CHECKED/RANGE,   ███████████████████████████████████████████████████████████*/

if(allConfig.animBg === true){
	impBgState.checked = true
	divBg.style.opacity = '.1419233'
	impBgState.ariaChecked = true
	impBgState.ariaLabel = 'Animação de fundo: Animação ligada.'
	voiceFactory(impBgState.ariaLabel)
} else {
	impBgState.checked = false
	divBg.style.opacity = '0'
	impBgState.ariaChecked = false
	impBgState.ariaLabel = 'Animação de fundo: Animação desligada.'
	voiceFactory(impBgState.ariaLabel)
}
function avatarState(x){
	Array.from(checkAvatar).forEach(e =>{
		e.classList.add('avtDisabled')
		e.setAttribute('aria-checked', 'false')
	})
	x.classList.remove('avtDisabled')
	x.setAttribute('aria-checked', 'true')
	x.setAttribute('checked', true)
	
	
	
	allConfig.avatarType = x.dataset.avataractive
	localStorage.setItem("allConfig", JSON.stringify(allConfig))
}
function musicState() {
	impMenuSound.ariaLabel = impMenuSound.checked ? 'Sons de menu ligado' : 'Sons de menu desligado';
	allConfig.soundMusic = impMusic.checked;
	allConfig.soundMenu = impMenuSound.checked;
	allConfig.soundVolume = myRangeMenuS.valueAsNumber;
	
	impMusic.ariaLabel = impMusic.checked ? 'Música de jogo ligada' : 'Música de jogo desligada';
	if (allConfig.soundMusic === true) {
		playMusic('audio/music02.mp3')
	} else {
		musicAudio.pause();
	}
	localStorage.setItem('allConfig', JSON.stringify(allConfig));
	myRangeMenuS.value = allConfig.soundVolume;
	impMenuSound.ariaChecked = allConfig.soundMenu;
	impMusic.ariaChecked = allConfig.soundMusic;
}
function volumeState(){
	
	musicAudio.volume = myRangeMenuS.valueAsNumber;
	if(myRangeMenuS.valueAsNumber === 0){
		impMusic.checked = false;
		impMenuSound.checked = false;
	} else {
		impMenuSound.checked = true;
		impMusic.checked = true;
		if(!allConfig.soundMenu) impMenuSound.checked = false;
	}
	
	
	
}
function funcAnimBgState(){
	
	//impBgState.checked = allConfig.animBg
	if(impBgState.checked){
		divBg.style.opacity = '0.149233'
		animacao.ariaChecked="false"
	}else{
		divBg.style.opacity = '0'
		animacao.ariaChecked="true"
	}
	

	
	allConfig.animBg = impBgState.checked
	localStorage.setItem("allConfig", JSON.stringify(allConfig))
	impBgState.ariaLabel = impBgState.checked ? 'Animação ligada.' : 'Animação desligada.';
	impBgState.ariaChecked = allConfig.animBg;	
	voiceFactory(impBgState.ariaLabel)
}
function funcVoiceState(){
	if(impVoice.checked){
		//...
	}else{
		//...
	}
	allConfig.voiceOn = impVoice.checked
	localStorage.setItem("allConfig", JSON.stringify(allConfig))
	impVoice.ariaLabel = impVoice.checked ? 'leitor de tela ligado, clique para desativar' : 'leitor de tela desligado';
	impVoice.ariaChecked = allConfig.voiceOn;	
	voiceFactory(impVoice.ariaLabel)
}
function isqwerty(e){
		Array.from(checkTeclado).forEach(el =>{
			el.classList.add('keyboardDisabled')
			el.setAttribute('aria-checked', 'false')
			el.setAttribute('checked', false)
		})
		e.classList.remove('keyboardDisabled')
		e.setAttribute('aria-checked', 'true')
		e.setAttribute('checked', true)
	
	allConfig.tecladoType = e.dataset.tecladoactive
	localStorage.setItem("allConfig", JSON.stringify(allConfig))
	voiceFactory(e.ariaLabel)
}

function removeLetterColor(eTarg,eColor){
	eTarg.ariaHidden = true
	eTarg.classList.add("letterDisabled")
	changeKeyboardIndex()
	if(eColor === true){
		eTarg.setAttribute('style',
	`text-rendering: optimizeLegibility;
	background:linear-gradient(-45deg, #222, #333, #444, #555)!important;
	cursor:default;color:#cccccccf;-webkit-text-stroke: green thin;`);
	
	}else{
		eTarg.setAttribute('style',
	`text-rendering: optimizeLegibility;
	background:linear-gradient(-45deg, #222, #333, #444, #555)!important;
	cursor:default;color:#cccccccf;-webkit-text-stroke: red thin;`);
	
	}
	
}

//h2.setAttribute('lang', navigator.language)

function createKeyboard(){
	
	//divkeyboard.ariaHidden = 'true'
	divkeyboard.innerText = ''
	playerErrors = allConfig.difficultyType - 1
	
	arrayLetters = [...Array(26)].map((val, i) => String.fromCharCode(i + 65))
	
	if(allConfig.tecladoType === '2'){
		arrayLetters = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m']
	}
	
	for(let i = 0; i<arrayLetters.length;i++){
		let span = document.createElement('SPAN')
		/* span.translate = 'no';
		span.setAttribute("data-no-translate", "true"); */
		span.textContent = arrayLetters[i].toUpperCase()
		span.classList.add("letter")
		if(arrayLetters[i] === 'C')span.id = 'letterC'
		divkeyboard.appendChild(span)
	}
	
	changeKeyboardIndex()
	
}
function changeKeyboardIndex(){
	
	let nArray = Array.from(divkeyboard.children).filter((element,index,array) =>{
		if(!element.classList.contains('letterDisabled')){
			return array[index]
		} else {element.removeAttribute('tabindex')}
	})
	
	nArray.forEach((el,idx) => {
		el.translate = 'no';
		el.setAttribute('tabindex', idx+1)
		el.setAttribute('aria-label', 'letra ' + el.textContent)
		el.onfocus = function(){
			if(isPlay === false)voiceFactory(el.ariaLabel)
		}
		//`Você tem: ${Timer.timeCountDown} segundos`
		
		if(el.getAttribute('tabindex') == '1') el.focus()
			
	})
	document.querySelector('[data-panel="menu"]').setAttribute('tabindex', nArray.length)
	
}

function initGame(){
	document.querySelector('[data-restartBtn="play"]').style.display = 'none'
	Timer.clr()
	isPlay = true
	musicAudio.volume = myRangeMenuS.valueAsNumber;
	let a
	if(allConfig.wordsType == '0') a = wordType_Objeto
	if(allConfig.wordsType == '1') a = wordType_Animal
	if(allConfig.wordsType == '2') a = wordType_Pais
	if(allConfig.wordsType == '3') a = wordType_Carro
	if(allConfig.wordsType == '4') a = wordType_Frutas
	if(allConfig.wordsType == '5') a = wordType_Profissao
	if(allConfig.wordsType == '6') a = wordType_Marcas
	if(allConfig.wordsType == '7') a = wordType_Mercado
	if(allConfig.wordsType == '8') a = wordType_Longas
	if(allConfig.wordsType == '9') a = wordType_Bebidas
	if(allConfig.wordsType == '10') a = wordType_Verbos
	if(allConfig.wordsType == '11') a = wordType_All
	let b = getRandomIntegerInclusive(a.length - 1,0)
	lastWord = a[b]
	h2.innerText = ''
	
	for(let i = 0; i<lastWord.length;i++){
		let span = document.createElement('SPAN')
		h2.appendChild(span)
		span.textContent = '_'
	}
	
	if(allConfig.avatarType === '1'){
		document.querySelector('#tronco').setAttribute('d', 'm 103.2256,95.439189 0.66741,9.121231 0.66741,11.34592 -1.77976,10.0111 -2.00221,5.11678 9.12122,1.55729 -0.44494,-5.56172 -0.22246,-17.13012 -1.55729,-14.015542 z')
		document.querySelector('#bracoLeft').setAttribute('d', 'M 105.45029,94.771783 C 84.983147,110.78955 84.983147,110.78955 84.983147,110.78955 l -13.348136,2.66963 8.008881,10.23357 10.233573,-8.00888 15.127895,-16.017769 z')
		document.querySelector('#bracoRight').setAttribute('d', 'm 106.78511,95.884128 7.34147,8.898762 16.24024,11.56838 6.22913,3.11457 -7.11901,4.00444 -8.23135,-7.11901 -10.23357,-9.78863 -4.44938,-6.896539 z')
		document.querySelector('#pernaLeft').setAttribute('d', 'm 102.11326,129.92188 -11.568386,20.68962 -7.341479,6.4516 7.786415,6.67407 4.894318,-10.01111 6.674072,-14.90542 3.11456,-8.67629 z')
		document.querySelector('#pernaRight').setAttribute('d', 'm 109.23227,129.47694 -5.33926,-0.44493 1.33482,8.23135 4.00444,16.68517 3.33703,11.12345 0.22247,1.33481 6.89654,-3.11456 -5.33926,-10.45605 -3.33703,-13.34813 z')
		document.querySelector('#cabelo2').style.display = 'none'
		document.querySelector('#delineadoLeft').style.display = 'none'
		document.querySelector('#delineadoRight').style.display = 'none'
		document.querySelector('#avatarSnowman').style.display = 'none'
		
	}
	
	
	if(allConfig.avatarType === '2'){
		document.querySelector('#tronco').setAttribute('d', 'm 103.2256,95.439189 -2.16416,8.256031 -4.253896,5.8825 c 0,0 -3.170116,8.74506 -5.914918,12.55312 -2.7448,3.80807 -8.833985,11.26302 -8.833985,11.26302 0,0 64.197169,14.32497 50.650879,4.15289 -7.36282,-5.52883 -7.69236,-8.81439 -11.22063,-13.34853 -3.52826,-4.53414 -5.02039,-11.23102 -5.02039,-11.23102 l -8.79352,-17.083072 z')
		document.querySelector('#bracoLeft').setAttribute('d', 'M 105.45029,94.771783 89.129087,105.82544 80.53377,117.68609 c 0,0 -1.791197,6.08327 -0.641774,7.15853 1.149422,1.07527 7.53831,-0.70693 7.53831,-0.70693 l 4.22228,-13.17965 13.352774,-11.291939 z')
		document.querySelector('#bracoRight').setAttribute('d', 'm 106.78511,95.884128 9.38649,7.168362 5.3728,6.43578 11.26958,8.19782 c 0,0 1.23611,5.37988 0.12377,6.41807 -1.11235,1.03818 -6.79784,-0.18894 -6.79784,-0.18894 l -7.78178,-11.68753 -7.34611,-5.66505 -4.44938,-6.896539 z')
		document.querySelector('#pernaLeft').setAttribute('d', 'm 94.10438,124.91633 -2.002223,20.24468 -4.338148,12.45826 c 0,0 0.852798,3.44827 1.83537,3.67074 0.982572,0.22247 4.060061,-2.33592 4.060061,-2.33592 l 2.33592,-10.34482 5.11679,-11.23468 3.11456,-8.67629 z')
		document.querySelector('#pernaRight').setAttribute('d', 'm 109.78844,122.5804 -7.56395,-1.0011 c 0.44494,2.74378 -2.283206,13.34996 -0.77864,8.67629 l 5.00556,10.90097 2.55838,9.12123 0.22247,10.0111 c 0,0 2.92918,2.26176 4.22691,2.28029 1.29774,0.0185 3.55951,-2.16909 3.55951,-2.16909 l -4.33815,-15.01666 -0.3337,-13.45936 z')
		document.querySelector('#cabelo2').style.display = 'block'
		document.querySelector('#delineadoLeft').style.display = 'block'
		document.querySelector('#delineadoRight').style.display = 'block'
		document.querySelector('#avatarSnowman').style.display = 'none'
		
	}
	
	if(allConfig.avatarType === '3'){
	document.querySelector('#avatarSnowman').style.display = 'block'
	}
	
	
	
	iconsError = [...Array(allConfig.difficultyType)]
	.map((val, i) => '<img src="img/erro0.svg" class="iconserror" alt="chance">')
	playerErrors = iconsError.length - 1
	erros.innerHTML = `${iconsError.join(' ')}`
	createKeyboard()
	
	let titleType = document.querySelector(`[data-typeActive="${allConfig.wordsType}"]`).textContent
	if(parseInt(allConfig.wordsType) != selectTypeWord.children.length){
		titulo.textContent = `${titleType} com ${lastWord.length} letras`;
	}
	else {
		titulo.textContent = `Palavra aleatória com ${lastWord.length} letras`;
	}
	
	//console.log(lastWord)
	Timer.timeCountDown = allConfig.timerType
	divtimer.textContent = `${Timer.timeCountDown}s`
	divscore.textContent = allConfig.pontos
	
	if(typeof allConfig.timerType === 'number') {
		Timer.init()
		divtimer.removeAttribute('title')
		divtimer.style.animationPlayState = 'running'
	} else {
		divtimer.innerHTML = '&#8734;'
		divtimer.title = 'Temporizador desligado'
		divtimer.style.animationPlayState = 'paused'
	}
	document.querySelector('#boca2').style.display = 'none'
	document.querySelector('#olhoLeft2').style.display = 'none'
	document.querySelector('#olhoRight2').style.display = 'none'
	document.querySelector('#olhoLeft').style.display = 'block'
	document.querySelector('#olhoRight').style.display = 'block'
		
	document.querySelector('#base').style.display = 'block'
	document.querySelector('#path1').style.display = 'block'
	document.querySelector('#boca').style.transform = 'none';
	document.querySelector('#corda').style.display = 'block'
	document.querySelector('#bracoLeft').style.display = 'none'
	document.querySelector('#bracoRight').style.display = 'none'
	document.querySelector('#tronco').style.display = 'none'
	document.querySelector('#pernaLeft').style.display = 'none'
	document.querySelector('#pernaRight').style.display = 'none'
	document.querySelector('#layer2').style.animationPlayState = 'running'
}

const Timer = {
	
	timeCountDown: allConfig.timerType,
	interval: null,
	
	init(){
		divtimer.style.animationPlayState = 'running'
		Timer.interval = setInterval(Timer.countdown, 1000)
		
		if(Timer.interval > 1){
			if(intervalBg === undefined)//var intervalBg = setInterval(funcIntervalBg,388)
			clearInterval(this.interval - 1)
			divBg.style.opacity = '0.05419233'
		}
		
	},
	
	countdown(){
		if(Timer.timeCountDown < 0) document.location.reload(true)
		//console.log(Timer.timeCountDown, Timer.interval)
		--Timer.timeCountDown
		divtimer.textContent = `${Timer.timeCountDown}s`
		if(Timer.timeCountDown <= 0){
			Array.from(h2.children).forEach( (el, index) => {
				el.removeAttribute('style')
				el.textContent = lastWord[index]
			})
			playerErrors = 0
			animateAvatar()
			animWord('blinker2')
			titulo.textContent = `Seu tempo acabou. Você perdeu.`
			Timer.clr()
			playEvent('audio/lose.mp3')
			musicAudio.pause()
		}
		if(!play.offsetParent || Timer.interval == null) Timer.clr()
	},
	
	clr(){
		divtimer.style.animationPlayState = 'paused'
		clearInterval(Timer.interval)
		Timer.interval = null
		musicAudio.pause()
		return;
	}
}

function afterGameover(){
	// resetar variaveis
	lastLetters = []
	lastWord = ''
	charEqualLastWord = []
	isPlay = false
	erros.innerText = ''
	divkeyboard.innerText = ''
	divtimer.innerText = ''
	h2.style.animationName = ''
	h2.removeEventListener('animationend', blinkEnd)
	//footer.firstElementChild.click()
	h2.ariaLabel = `palavra oculta`
	divkeyboard.ariaHidden = false
	refreshMission()
	
}

Array.from(checkTeclado).forEach((e,ind,arr) =>{
	e.addEventListener('click',()=>{isqwerty(e)})
	e.classList.add('keyboardDisabled')
	e.setAttribute('aria-checked', 'false')
	if(e.dataset.tecladoactive == allConfig.tecladoType){
		e.classList.remove('keyboardDisabled')
		e.setAttribute('aria-checked', 'true')
		e.setAttribute('checked', true)
	
	}
})
Array.from(menuLinks.children).forEach(e=>{
	e.addEventListener('focus', ()=>{
		voiceFactory(menuLinks.ariaLabel + '; '+e.ariaLabel)
		menuLinks.ariaLabel = ''
	})
	
	
});
Array.from(selectTypeWord.children).forEach(e=>{
	e.addEventListener('focus', ()=>{
		//voiceFactory(e.parentElement.ariaLabel + ': '+e.ariaLabel)
		e.parentElement.ariaLabel = ''
	})
	console.log()
});
Array.from(selectLevel.children).forEach(e=>{
	e.addEventListener('focus', ()=>{
		voiceFactory(e.parentElement.ariaLabel + ': '+e.ariaLabel)
		e.parentElement.ariaLabel = ''
	})
	console.log()
});
Array.from(selectTimer.children).forEach(e=>{
	e.addEventListener('focus', ()=>{
		voiceFactory(e.parentElement.ariaLabel + ': '+e.ariaLabel)
		e.parentElement.ariaLabel = ''
	})
	console.log()
});
Array.from(divAvatars.children).forEach(e=>{
	e.addEventListener('focus', ()=>{
		voiceFactory(e.ariaLabel)
	})
	console.log()
});

fullIco.addEventListener('click', toggleFullScreen);

function toggleFullScreen() {
  const doc = window.document;
  const docEl = doc.documentElement;
  const requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  const cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

  if (!doc.fullscreenElement) {
    requestFullScreen.call(docEl);
    fullIco.classList.remove('fa-expand');
    fullIco.classList.add('fa-compress');
    isFullScreen = true;
  } else {
    cancelFullScreen.call(doc);
    fullIco.classList.remove('fa-compress');
    fullIco.classList.add('fa-expand');
    
	isFullScreen = false;
  }
  
}

function refreshMission(){
 	var currentScore = allConfig.pontos
	var totalJogos = allConfig.totalJogos
	var acertadas = allConfig.acertadas
	var currentWins = allConfig.lastWinCounter
	var currentWinRecord = allConfig.lastWinRecord
	var currentMissoes = allConfig.arrMissoes;
	
	function addTrofeu(a){
		
		currentMissoes[a] = true;
		liConquistas[a].classList.add('liConquistado');
		liConquistas[a].lastElementChild.lastElementChild.classList.remove('trofeuConquista');
		liConquistas[a].lastElementChild.lastElementChild.classList.add('trofeuConquistado');
		liConquistas[a].lastElementChild.lastElementChild.innerHTML = `CONQUISTADO<i class="fa-solid fa-check"></i>`;
		
	}
	
	//Atinja uma Pontuação Total superior a 80 pontos
	if (currentScore < 80) {
		if(currentMissoes[0] === true){addTrofeu(0)}else{
			liConquistas[0].lastElementChild.lastElementChild.innerHTML = currentScore + "/80<i class='fa-solid fa-lock'></i>";
		}
	} else {addTrofeu(0)}
	
	//Acerte 10 palavras.
	if (acertadas < 10) {
		if(currentMissoes[1] === true){addTrofeu(1)}else{
			liConquistas[1].lastElementChild.lastElementChild.innerHTML = acertadas + "/10<i class='fa-solid fa-lock'></i>";
		}
	} else {addTrofeu(1)}
	
	//Conclua 30 jogos.
	if (totalJogos < 30) {
		if(currentMissoes[2] === true){addTrofeu(2)}else{
			liConquistas[2].lastElementChild.lastElementChild.innerHTML = totalJogos + "/30<i class='fa-solid fa-lock'></i>";
		}
	} else {addTrofeu(2)}
	
	//Atinja uma sequência de 5 vitórias seguidas.
	if (currentWinRecord < 5) {
		if(currentMissoes[3] === true){addTrofeu(3)}else{
			liConquistas[3].lastElementChild.lastElementChild.innerHTML = currentWinRecord + "/5<i class='fa-solid fa-lock'></i>";
		}
	} else {addTrofeu(3)}
	
	//Atinja uma Pontuação Total superior a 200 pontos
	if (currentScore < 200) {
		if(currentMissoes[4] === true){addTrofeu(4)}else{
			liConquistas[4].lastElementChild.lastElementChild.innerHTML = currentScore + "/200<i class='fa-solid fa-lock'></i>";
		}
	} else {addTrofeu(4)}
	
	//Acerte 50 palavras.
	if (acertadas < 50) {
		if(currentMissoes[5] === true){addTrofeu(5)}else{
			liConquistas[5].lastElementChild.lastElementChild.innerHTML = acertadas + "/50<i class='fa-solid fa-lock'></i>";
		}
	} else {addTrofeu(5)}
	
	
	//Conclua 50 jogos.
	if (totalJogos < 50) {
		if(currentMissoes[6] === true){addTrofeu(6)}else{
			liConquistas[6].lastElementChild.lastElementChild.innerHTML = totalJogos + "/50<i class='fa-solid fa-lock'></i>";
		}
	} else {addTrofeu(6)}
	
	//Atinja uma sequência de 10 vitórias seguidas.
	if (currentWinRecord < 10) {
		if(currentMissoes[7] === true){addTrofeu(7)}else{
			liConquistas[7].lastElementChild.lastElementChild.innerHTML = currentWinRecord + "/10<i class='fa-solid fa-lock'></i>";
		}
	} else {addTrofeu(7)}

	if (currentMissoes.every(e => e === true)) {
		document.querySelectorAll('b')[0].style.display = 'block';
		
		//(function() {voiceFactory(document.querySelectorAll('b')[0].textContent)})();
		
		
	}
	
}