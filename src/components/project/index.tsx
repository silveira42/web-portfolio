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
			<div className='project-header'>
				<div className='project-title'>
					<h3>{props.project.title}</h3>
				</div>
				<div className='project-links'>
					{props.project.linkToCode && (
						<a
							className='project-link project-link-to-code'
							href={props.project.linkToCode}
							target='_blank'
							rel='noreferrer'
						>
							Code
						</a>
					)}
					{props.project.linkToDemo && (
						<a
							className='project-link project-link-to-demo'
							href={props.project.linkToDemo}
							target='_blank'
							rel='noreferrer'
						>
							Demo
						</a>
					)}
				</div>
			</div>
			<div className='project-content'>
				<div className='project-description'>
					{props.project.description.split('\n').map((line, index) => (
						<p key={index}>{line}</p>
					))}
				</div>
				<div className='project-technologies'>
					{props.project.technologies.map((technology, index) => (
						<p key={index} className='project-technology-tag'>
							{technology}
						</p>
					))}
				</div>
			</div>
		</div>
	);
}
