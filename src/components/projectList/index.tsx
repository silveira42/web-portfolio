import { ProjectModel } from '../../model/project';
import Project from '../project';
import './styles.css';


type ProjectListProps = {
	projectList: ProjectModel[];
	title: string;
	description: string;
};

export default function ProjectList(props: ProjectListProps) {
	return (
		<div className='project-list'>
			<div className='project-list-header'>
				<h2>{props.title}</h2>
				<p>{props.description}</p>
			</div>
			<div className='project-list-content'>
				{props.projectList.map((project, index) => (
					<Project key={index} project={project} />
				))}
				</div>
		</div>
	);
}
