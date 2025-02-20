import ProjectList from '../../components/projectList';
import './styles.css';

const projects = [
	{
		title: 'Project 1',
		description: 'This is a project',
		technologies: ['React', 'TypeScript'],
		image: '',
		linkToCode: '',
		linkToDemo: '',
	},
	{
		title: 'Project 2',
		description: 'This is another project',
		technologies: ['React', 'TypeScript'],
		image: '',
		linkToCode: '',
		linkToDemo: '',
	},
	{
		title: 'Project 3',
		description: 'This is a third project',
		technologies: ['React', 'TypeScript'],
		image: '',
		linkToCode: '',
		linkToDemo: '',
	},
	{
		title: 'Project 1',
		description: 'This is a project',
		technologies: ['React', 'TypeScript'],
		image: '',
		linkToCode: '',
		linkToDemo: '',
	},
	{
		title: 'Project 2',
		description: 'This is another project',
		technologies: ['React', 'TypeScript'],
		image: '',
		linkToCode: '',
		linkToDemo: '',
	},
	{
		title: 'Project 3',
		description: 'This is a third project',
		technologies: ['React', 'TypeScript'],
		image: '',
		linkToCode: '',
		linkToDemo: '',
	},
	{
		title: 'Project 1',
		description: 'This is a project',
		technologies: ['React', 'TypeScript'],
		image: '',
		linkToCode: '',
		linkToDemo: '',
	},
	{
		title: 'Project 2',
		description: 'This is another project',
		technologies: ['React', 'TypeScript'],
		image: '',
		linkToCode: '',
		linkToDemo: '',
	},
	{
		title: 'Project 3',
		description: 'This is a third project',
		technologies: ['React', 'TypeScript'],
		image: '',
		linkToCode: '',
		linkToDemo: '',
	},
	{
		title: 'Project 1',
		description: 'This is a project',
		technologies: ['React', 'TypeScript'],
		image: '',
		linkToCode: '',
		linkToDemo: '',
	},
	{
		title: 'Project 2',
		description: 'This is another project',
		technologies: ['React', 'TypeScript'],
		image: '',
		linkToCode: '',
		linkToDemo: '',
	},
	{
		title: 'Project 3',
		description: 'This is a third project',
		technologies: ['React', 'TypeScript'],
		image: '',
		linkToCode: '',
		linkToDemo: '',
	},
	{
		title: 'Project 1',
		description: 'This is a project',
		technologies: ['React', 'TypeScript'],
		image: '',
		linkToCode: '',
		linkToDemo: '',
	},
	{
		title: 'Project 2',
		description: 'This is another project',
		technologies: ['React', 'TypeScript'],
		image: '',
		linkToCode: '',
		linkToDemo: '',
	},
	{
		title: 'Project 3',
		description: 'This is a third project',
		technologies: ['React', 'TypeScript'],
		image: '',
		linkToCode: '',
		linkToDemo: '',
	},
	{
		title: 'Project 1',
		description: 'This is a project',
		technologies: ['React', 'TypeScript'],
		image: '',
		linkToCode: '',
		linkToDemo: '',
	},
	{
		title: 'Project 2',
		description: 'This is another project',
		technologies: ['React', 'TypeScript'],
		image: '',
		linkToCode: '',
		linkToDemo: '',
	},
	{
		title: 'Project 3',
		description: 'This is a third project',
		technologies: ['React', 'TypeScript'],
		image: '',
		linkToCode: '',
		linkToDemo: '',
	},
];

export default function Home() {
	return (
		<div className='home'>
			<p>
				Bem vindo ao meu portfólio! Sou desenvolvedor, mas também conheço
				DevOps, infraestrutura, redes e segurança. Aqui você encontrará alguns
				dos meus projetos.
			</p>
			<ProjectList
				title='Full-stack'
				description='Gosto de arquitetar sistemas completos, e a melhor forma que posso fazer isso é através de projetos full-stack'
				projectList={projects}
			/>
			{/* <ProjectList
				title='Frontend'
				description='Sempre desenvolvo pensando na experiência do usuário, e por isso gosto de trabalhar com frontend'
				projectList={projects}
			/>
			<ProjectList
				title='Backend'
				description='Conhecimento matemático e lógico sempre me inspiraram, e poder aplicá-los na prática é o que me motiva a trabalhar com backend'
				projectList={projects}
			/> */}
		</div>
	);
}
