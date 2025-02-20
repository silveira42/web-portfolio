import { useContext } from '../../AppContext';
import ProjectList from '../../components/projectList';
import './styles.css';

const frontProjects = [
	{
		title: 'Landing Page',
		description: 'This is a third project',
		technologies: ['React', 'TypeScript'],
		linkToCode: 'https://github.com/silveira42/web-landing-page',
		linkToDemo: 'https://thesilver.com.br/',
	},
	{
		title: 'Jogo da forca',
		description: 'This is a project',
		technologies: ['React', 'TypeScript'],
		linkToCode: 'https://github.com/silveira42/forca-react',
		linkToDemo: 'https://forca.thesilver.com.br/',
	},
	{
		title: 'Jogo Pong',
		description: 'This is another project',
		technologies: ['React', 'TypeScript'],
		linkToCode: 'https://github.com/silveira42/pong-react',
		linkToDemo: 'https://pong.thesilver.com.br/',
	},
];

const backProjects = [
	{
		title: 'Kafka Store API',
		description: 'This is a third project',
		technologies: ['React', 'TypeScript'],
		linkToCode: 'https://github.com/silveira42/kafka-store-api',
	},
	{
		title: 'IRIS® Demo',
		description: 'This is a project',
		technologies: ['React', 'TypeScript'],
		linkToCode: 'https://github.com/silveira42/iris-demo',
		linkToDemo: 'https://irisdemo.thesilver.com.br/csp/sys/UtilHome.csp',
	},
	{
		title: 'ERP Backend',
		description: 'This is another project',
		technologies: ['React', 'TypeScript'],
		linkToCode: 'https://github.com/silveira42/erp-demo-backend-ts',
	},
];

const sysadmProjects = [
	{
		title: 'Beam',
		description: 'This is a third project',
		technologies: ['React', 'TypeScript'],
		linkToCode: 'https://github.com/silveira42/beam',
	},
	{
		title: 'Pastas para Branches Git',
		description: 'This is a project',
		technologies: ['React', 'TypeScript'],
		linkToCode: 'https://github.com/silveira42/folders-to-git-branches',
	},
];

const fullProjects = [
	{
		title: 'IRIS Demo',
		description: 'This is a third project',
		technologies: ['Intersystems® IRIS', 'Node TypeScript', 'React TypeScript'],
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
