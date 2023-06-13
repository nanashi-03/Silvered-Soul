"use client"
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Database } from '@/lib/database.types';
import { Card } from '../components/pcard';
import { Navigation } from '../components/nav';

export default function ProjectsPage() {
	const [Projects, setProjects] = useState<Database['public']['Tables']['projects']['Row'][]>([]);

	useEffect(() => {
		async function fetchData() {
			const { data, error } = await supabase.from('projects').select('*');
			if (error) {
				console.error(error);
			} else {
				setProjects(data);
			}
		}

		fetchData();
	}, []);

	// return (
	// 	<div>
	// 		{Projects.map((item) => (
	// 			<Card key={item.id} data={item} />
	// 		))}
	// 	</div>
	// );

	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid pt-20 w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
					{Projects.map((s) => (
						<Card>
							<span
								className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
								aria-hidden="true"
							/>
							{/* <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
								{s.title}
							</span>{" "} */}
							<div className="z-10 pb-8 flex flex-col items-center">
								<span className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
									{s.title}
								</span>
								<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
									{s.description}
								</span>
								<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
									{s.repo}
								</span>
								<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
									{s.body}
								</span>
							</div>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}









// import fs from 'fs';
// import path from 'path';
// import { NextPage } from 'next';
// import { Card } from '../components/card';
// import { supabase } from '@/lib/supabaseClient';
// import { Database } from '@/lib/database.types';
// import { useState, useEffect } from 'react';

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
// 	let { data } = await supabase.from('projects').select('*')

// 	return (
// 		<div>
// 			<h1>Projects</h1>
// 			{data.map((project) => (
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