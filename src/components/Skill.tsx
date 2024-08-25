import { useEffect, useState } from 'react';
import styled from 'styled-components';

import ISkill from '../types/ISkill';
import { getSkillInfo } from '../data/skills';

const Skill = ({ tag, brief = false }: { tag: string; brief?: boolean }) => {
	const [skill, setSkill] = useState<ISkill | null>(null);

	useEffect(() => {
		const skill = getSkillInfo(tag);

		if (skill) {
			setSkill(skill);
		}
	}, [tag]);

	if (!skill) return;

	return brief ? (
		<Container
			brief={brief}
			className="skill"
			textcolor={skill.textColor}
			backcolor={skill.backColor}
		>
			{skill.tag}
		</Container>
	) : (
		<Container
			brief={brief}
			className="skill"
			textcolor={skill.textColor}
			backcolor={skill.backColor}
		>
			<skill.Logo />
			{skill.name}

			{skill?.isNew && <span className="new-tag">New!</span>}
			{skill?.isTop && (
				<span className="top-tag">
					✨<span>Top</span>
				</span>
			)}
		</Container>
	);
};

const Container = styled.div<{
	brief: boolean;
	backcolor: string;
	textcolor: string;
}>`
	background: ${({ backcolor, brief }) => (brief ? backcolor : '#eaeaea')};
	color: ${({ textcolor, brief }) => (brief ? textcolor : '#474747')};
	padding: ${({ brief }) => (brief ? '8px 10px' : '10px 13px')};
	border-radius: 10px;
	font-size: ${({ brief }) => (brief ? '14px' : '16px')};
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.15s linear;
	user-select: none;
	width: fit-content;
	position: relative;

	.new-tag,
	.top-tag {
		position: absolute;
		top: 0;
		background: #fff;
		font-size: 12px;
		font-weight: 600;
		padding: 2px 5px;
		/* box-shadow: 1px 2px 3px #ddd; */
		border: 0.5px solid #eeeded;
		border-radius: 8px;
		transition: all 0.1s linear;
	}

	.new-tag {
		right: 0;
		transform: translate(50%, -50%);
		color: dodgerblue;
	}

	.top-tag {
		display: flex;
		left: 0;
		transform: translate(-50%, -50%);
		color: #f9c23c;
		span {
			display: none;
		}
	}

	svg {
		margin-right: 6px;
		font-size: 18px;
	}

	&:hover {
		background: ${({ backcolor }) => backcolor};
		color: ${({ textcolor }) => textcolor};

		.new-tag {
			color: dodgerblue;
		}
		.top-tag > span {
			display: block;
		}
	}
`;

export default Skill;
