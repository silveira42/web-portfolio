import { useContext } from '../../AppContext';
import ProjectList from '../../components/projectList';
import './styles.css';

const frontProjects = [
	{
		title: 'Silver Hub',
		description:
			'Esta é a landing page que criei para utilizar na raiz do meu domínio. Utilizo arquivos de configuração e uma arquitetura flexível para poder adicionar e remover aplicativos da página com facilidade.',
		technologies: ['React TS'],
		linkToCode: 'https://github.com/silveira42/web-landing-page',
		linkToDemo: 'https://thesilver.com.br/',
	},
	{
		title: 'Jogo da forca',
		description:
			'Um simples porém divertido jogo da forca que desenvolvi para praticar React com TypeScript.',
		technologies: ['React TS'],
		linkToCode: 'https://github.com/silveira42/forca-react',
		linkToDemo: 'https://forca.thesilver.com.br/',
	},
	{
		title: 'Jogo Pong',
		description:
			'Um dos primeiros jogos de computador já criados, agora em React.',
		technologies: ['React TS'],
		linkToCode: 'https://github.com/silveira42/pong-react',
		linkToDemo: 'https://pong.thesilver.com.br/',
	},
];

const backProjects = [
	{
		title: 'Kafka Store API',
		description:
			'Uma API de loja virtual que utiliza Apache Kafka para comunicação entre microserviços.',
		technologies: ['Kafka', 'Node TS'],
		linkToCode: 'https://github.com/silveira42/kafka-store-api',
	},
	{
		title: 'ERP Backend',
		description: 'Uma API de um sistema ERP que utilizo no projeto IRIS Demo.',
		technologies: ['Node TS'],
		linkToCode: 'https://github.com/silveira42/erp-demo-backend-ts',
	},
];

const sysadmProjects = [
	{
		title: 'Beam',
		description:
			'Um webserver nginx que controlo via Docker e utilizo para compartilhar arquivos entre dispositivos com uma página web simples para melhor experiência.',
		technologies: ['Nginx', 'HTML'],
		linkToCode: 'https://github.com/silveira42/beam',
	},
	{
		title: '"Pastas para Branches" Git',
		description:
			'Em alguns projetos antigos, algumas pessoas costumavam versionar o código criando uma versão por pasta. Portanto, desenvolvi este script para realizar essa tarefa tediosa de forma automatizada.',
		technologies: ['Shell', 'Git'],
		linkToCode: 'https://github.com/silveira42/folders-to-git-branches',
	},
];

const fullProjects = [
	{
		title: 'IRIS Demo',
		description:
			'Neste projeto eu demonstro o uso do Intersystems® IRIS como plataforma de integração entre um ERP e um site de vendas. \nPara isso, desenvolvi tanto a integração quanto ambos sistemas de ponta, e utilizei de submódulos git para organizar o código.',
		technologies: ['Intersystems® IRIS', 'Node TS', 'React TS'],
		linkToCode: 'https://github.com/silveira42/iris-mkt-erp-demo',
		linkToDemo: 'https://thesilver.com.br/',
	},
];

export default function Home() {
	const { theme } = useContext();

	return (
		<div className='home' data-theme={theme.getCurrent()}>
			<p className='home-title'>
				Bem vindo ao meu portfólio! Sou desenvolvedor, mas também conheço
				DevOps, infraestrutura, redes e segurança. Aqui você encontrará alguns
				dos meus projetos.
			</p>
			<ProjectList
				title='Full-stack'
				description='Gosto de arquitetar sistemas completos, e a melhor forma que posso fazer isso é através de projetos full-stack'
				projectList={fullProjects}
			/>
			<ProjectList
				title='Frontend'
				description='Sempre desenvolvo pensando na experiência do usuário, e por isso gosto de trabalhar com frontend'
				projectList={frontProjects}
			/>
			<ProjectList
				title='Backend'
				description='Conhecimento matemático e lógico sempre me inspiraram, e poder aplicá-los na prática é o que me motiva a trabalhar com backend'
				projectList={backProjects}
			/>
			<ProjectList
				title='SysAdm'
				description='Entender como computadores funcionam sempre foi uma grande missão para mim, e projetos como estes me permitem aprender cada vez mais'
				projectList={sysadmProjects}
			/>
		</div>
	);
}
