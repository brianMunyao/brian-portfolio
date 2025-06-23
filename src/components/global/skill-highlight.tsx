import React, { PropsWithChildren } from 'react';

type Props = PropsWithChildren<object>;

const SkillHighlight = ({ children }: Props) => {
	return (
		<span className="bg-white/10 border border-white/15 rounded-sm px-1 py-0.5 font-medium">
			{children}
		</span>
	);
};

export default SkillHighlight;
