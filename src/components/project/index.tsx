import { useContext } from '../../AppContext';
import { ProjectModel } from '../../model/project';
import './styles.css';

type ProjectProps = {
	project: ProjectModel;
};

export default function Project(props: ProjectProps) {
	const { theme } = useContext();

	return (
		<div className='project' data-theme={theme.getCurrent()}>
			<h3>{props.project.title}</h3>
			<p>{props.project.description}</p>
			<ul>
				{props.project.technologies.map((technology, index) => (
					<li key={index}>{technology}</li>
				))}
			</ul>
			<a href={props.project.linkToCode} target='_blank' rel='noreferrer'>
				Code
			</a>
			<a href={props.project.linkToDemo} target='_blank' rel='noreferrer'>
				Demo
			</a>
		</div>
	);
}
