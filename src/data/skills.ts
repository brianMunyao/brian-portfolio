import {
	IoLogoCss3,
	IoLogoDocker,
	IoLogoHtml5,
	IoLogoJavascript,
	IoLogoNodejs,
	IoLogoPython,
	IoLogoReact,
} from 'react-icons/io5';
import { DiJava, DiPostgresql } from 'react-icons/di';
import {
	SiExpress,
	SiFlask,
	SiJupyter,
	SiMongodb,
	SiCsharp,
	SiPhp,
	SiRealm,
	SiSqlite,
	SiTypescript,
	SiVisualstudiocode,
	SiRedux,
	SiDotnet,
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { ImGit } from 'react-icons/im';
import { AiOutlineConsoleSql,  } from 'react-icons/ai';
import ISkill from '../types/ISkill';
import { RiNextjsFill } from 'react-icons/ri';

export const languages = [
	'#javascript',
	'#typescript',
	'#python',
	'#java',
	'#csharp',
];
export const frameworks = [
	'#nextjs',
	'#react',
	'#reactnative',
	'#nodejs',
	'#expressjs',
	'#flask',
	'#dotnet',
];
export const databases = [
	'#postgresql',
	'#mongodb',
	'#sql',
	'#realm-db',
	'#sqlite',
];
export const tools = ['#vscode', '#docker', '#jupyter', '#git', '#redux'];

export const skills: ISkill[] = [
	{
		Logo: SiTypescript,
		name: 'TypeScript',
		tag: '#typescript',
		backColor: '#007ACC',
		textColor: '#FFF',
		isTop: true,
	},
	{
		Logo: IoLogoJavascript,
		name: 'JavaScript',
		tag: '#javascript',
		backColor: '#F0DB4F',
		textColor: '#ffffff',
		isTop: true,
	},
	{
		Logo: IoLogoPython,
		name: 'Python',
		tag: '#python',
		backColor: '#ffde57',
		textColor: '#3e7aab',
	},
	{
		Logo: DiJava,
		name: 'Java',
		tag: '#java',
		backColor: '#f09112',
		textColor: '#507e9c',
	},
	{
		Logo: SiCsharp,
		name: 'C#',
		tag: '#csharp',
		backColor: '#671473',
		textColor: '#fff',
		isNew: true,
	},
	{
		Logo: SiPhp,
		name: 'PHP',
		tag: '#php',
		backColor: '#8993be',
		textColor: '#fff',
	},
	{
		Logo: IoLogoHtml5,
		name: 'HTML5',
		tag: '#html',
		backColor: '#f75421',
		textColor: '#f2f2f2',
	},
	{
		Logo: IoLogoCss3,
		name: 'CSS3',
		tag: '#css',
		backColor: '#2194f0',
		textColor: '#f4f4f4',
	},
	{
		Logo: IoLogoReact,
		name: 'React',
		tag: '#react',
		backColor: '#282c34',
		textColor: '#61DAFB',
		isTop: true,
	},
	{
		Logo: RiNextjsFill,
		name: 'Next.js',
		tag: '#nextjs',
		backColor: '#282828',
		textColor: '#f7f7f7',
		isTop: true,
	},
	{
		Logo: TbBrandReactNative,
		name: 'React Native',
		tag: '#reactnative',
		backColor: '#282c34',
		textColor: '#61DAFB',
		isTop: true,
	},
	{
		Logo: IoLogoNodejs,
		name: 'Node.js',
		tag: '#nodejs',
		backColor: '#026e00',
		textColor: '#f7f7f7',
		isTop: true,
	},
	{
		Logo: SiFlask,
		name: 'Flask',
		tag: '#flask',
		backColor: '#282828',
		textColor: '#f7f7f7',
	},
	{
		Logo: SiExpress,
		name: 'Express.js',
		tag: '#expressjs',
		backColor: '#333333',
		textColor: '#f6f6f6',
		isTop: true,
	},
	{
		Logo: SiDotnet,
		name: '.NET',
		tag: '#dotnet',
		backColor: '#4e2acd',
		textColor: '#f6f6f6',
		isNew: true,
	},
	{
		Logo: AiOutlineConsoleSql,
		name: 'SQL',
		tag: '#sql',
		backColor: '#0091df',
		textColor: '#cae1f1',
	},
	{
		Logo: DiPostgresql,
		name: 'PostgreSQL',
		tag: '#postgresql',
		backColor: '#31648c',
		textColor: '#fff',
		isTop: true,
	},
	{
		Logo: SiMongodb,
		name: 'Mongo DB',
		tag: '#mongodb',
		backColor: '#023430',
		textColor: '#00ed64',
	},
	{
		Logo: SiSqlite,
		name: 'SQLite',
		tag: '#sqlite',
		backColor: '#044a5d',
		textColor: '#8ecbff',
	},
	{
		Logo: SiRealm,
		name: 'Realm DB',
		tag: '#realm-db',
		backColor: '#7056bc',
		textColor: '#e9e9e9',
	},
	{
		Logo: ImGit,
		name: 'Git',
		tag: '#git',
		backColor: '#e84d31',
		textColor: '#3b2c00',
	},
	{
		Logo: SiJupyter,
		name: 'Jupyter Notebooks',
		tag: '#jupyter',
		backColor: '#eb7325',
		textColor: '#616262',
	},
	{
		Logo: IoLogoDocker,
		name: 'Docker',
		tag: '#docker',
		backColor: '#218bea',
		textColor: '#ffffff',
	},
	{
		Logo: SiVisualstudiocode,
		name: 'VS Code',
		tag: '#vscode',
		backColor: '#1e97e8',
		textColor: '#f6f6f6',
	},
	{
		Logo: SiRedux,
		name: 'Redux',
		tag: '#redux',
		backColor: '#764abc',
		textColor: '#f6f6f6',
	},
];

export const getSkillInfo = (skill: string) => {
	const item = skills.filter((s) => s.tag === skill);
	return item.length > 0 ? item[0] : false;
};
