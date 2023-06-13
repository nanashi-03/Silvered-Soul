// import fs from 'fs';
// import path from 'path';
// import { NextPage } from 'next';
// import { Card } from '../components/card';
// import { supabase } from '@/lib/supabaseClient';

// type ProjectCardProps = {
// 	id: string;
// 	title: string;
// 	description: string;
// 	repo: string;
// 	body: string;
// };

// const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, repo }) => {
// 	return (
// 		<Card>
// 			<h3>{title}</h3>
// 			<p>{description}</p>
// 			<p>{repo}</p>
// 		</Card>
// 	);
// };

// type ProjectsPageProps = {
// 	projects: ProjectCardProps[];
// };

// export default async function  ProjectsPage() {
// 	let { projects } = await supabase.from('projects').select<ProjectCardProps[]>('*')

// 	return (
// 		<div>
// 			<h1>Projects</h1>
// 			{projects.map((project) => (
// 				<ProjectCard key={project.id} {...project} />
// 			))}
// 		</div>
// 	);
// };

// export async function getServerSideProps() {
// 	let { data } = await supabase.from('projects').select('*')

// 	return {
// 		props: {
// 			projects: data
// 		},
// 	}
// }