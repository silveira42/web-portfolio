import { useState } from 'react';
import { useContext } from '../../AppContext';
import './styles.css';

export default function Contact() {
	const { intl } = useContext();
	const dictionary = intl.getDictionary();
	const [copiedItem, setCopiedItem] = useState<string | null>(null);

	const handleEmailClick = () => {
		window.open(`mailto:${dictionary.portfolio.contact.email}`, '_blank');
	};

	const handlePhoneClick = () => {
		const phone = dictionary.portfolio.contact.phone.replace(/[^+\d]/g, '');
		window.open(`tel:${phone}`, '_blank');
	};

	const handleLinkedInClick = () => {
		window.open(`https://${dictionary.portfolio.contact.linkedin}`, '_blank');
	};

	const handleGitHubClick = () => {
		window.open(`https://${dictionary.portfolio.contact.github}`, '_blank');
	};

	const handleCopyToClipboard = (text: string, itemType: string) => {
		navigator.clipboard.writeText(text).then(() => {
			setCopiedItem(itemType);
			// Reset after 2 seconds
			setTimeout(() => {
				setCopiedItem(null);
			}, 2000);
		}).catch(err => {
			console.error('Failed to copy: ', err);
		});
	};

	return (
		<div className="contact-section">
			<div className="section-title">{dictionary.portfolio.contact.title}</div>
			<div className="section-content">
				<div className="contact-content">
					<div className="contact-item">
						<div className="contact-info" onClick={handleEmailClick}>
							<span className="contact-label">📧 {dictionary.portfolio.contact.email}:</span>
							<span className="contact-value">{dictionary.portfolio.contact.emailValue}</span>
						</div>
						<span
							className="copy-icon"
							onClick={(e) => {
								e.stopPropagation();
								handleCopyToClipboard(dictionary.portfolio.contact.emailValue, 'email');
							}}
							title={copiedItem === 'email' ? 'Copied!' : 'Copy to clipboard'}
						>
							{copiedItem === 'email' ? '✅' : '📋'}
						</span>
					</div>
					<div className="contact-item">
						<div className="contact-info" onClick={handlePhoneClick}>
							<span className="contact-label">📞 {dictionary.portfolio.contact.phone}:</span>
							<span className="contact-value">{dictionary.portfolio.contact.phoneValue}</span>
						</div>
						<span
							className="copy-icon"
							onClick={(e) => {
								e.stopPropagation();
								handleCopyToClipboard(dictionary.portfolio.contact.phoneValue, 'phone');
							}}
							title={copiedItem === 'phone' ? 'Copied!' : 'Copy to clipboard'}
						>
							{copiedItem === 'phone' ? '✅' : '📋'}
						</span>
					</div>
					<div className="contact-item">
						<div className="contact-info" onClick={handleLinkedInClick}>
							<span className="contact-label">💼 {dictionary.portfolio.contact.linkedin}:</span>
							<span className="contact-value">{dictionary.portfolio.contact.linkedinValue}</span>
						</div>
						<span
							className="copy-icon"
							onClick={(e) => {
								e.stopPropagation();
								handleCopyToClipboard(`https://${dictionary.portfolio.contact.linkedinValue}`, 'linkedin');
							}}
							title={copiedItem === 'linkedin' ? 'Copied!' : 'Copy to clipboard'}
						>
							{copiedItem === 'linkedin' ? '✅' : '📋'}
						</span>
					</div>
					<div className="contact-item">
						<div className="contact-info" onClick={handleGitHubClick}>
							<span className="contact-label">🔗 {dictionary.portfolio.contact.github}:</span>
							<span className="contact-value">{dictionary.portfolio.contact.githubValue}</span>
						</div>
						<span
							className="copy-icon"
							onClick={(e) => {
								e.stopPropagation();
								handleCopyToClipboard(`https://${dictionary.portfolio.contact.githubValue}`, 'github');
							}}
							title={copiedItem === 'github' ? 'Copied!' : 'Copy to clipboard'}
						>
							{copiedItem === 'github' ? '✅' : '📋'}
						</span>
					</div>
					<div className="contact-item">
						<div className="contact-info">
							<span className="contact-label">📍 {dictionary.portfolio.contact.location}:</span>
							<span className="contact-value">{dictionary.portfolio.contact.locationValue}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
