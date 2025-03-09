"use client";

import { BookOpen, Calendar, Frame, Heart, PieChart, Plus } from "lucide-react";
import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarRail,
} from "@/components/ui/sidebar";

import { Button } from "./ui/button";

// This is sample data.
const data = {
	user: {
		name: "Fien Gérardi",
		email: "fien.gerardi@gmail.com",
		avatar: "/avatars/shadcn.jpg",
	},
	navMain: [
		{
			title: "Kookboek",
			url: "#",
			icon: BookOpen,
			isActive: true,
			items: [
				{
					title: "Alle recepten",
					url: "#",
				},
				{
					title: "Ontbijt",
					url: "#",
				},
				{
					title: "Lunch",
					url: "#",
				},
				{
					title: "Geen categorie",
					url: "#",
				},
			],
		},
		{
			title: "Favorieten",
			url: "#",
			icon: Heart,
			isActive: true,
			items: [
				{
					title: "Vegetarische goulash",
					url: "#",
				},
				{
					title: "Balletjes in tomatensaus",
					url: "#",
				},
				{
					title: "Pasta met zalm",
					url: "#",
				},
			],
		},
	],
	documentation: [
		{
			name: "Eenheden",
			url: "#",
			icon: Frame,
		},
		{
			name: "Calorieën en macro's",
			url: "#",
			icon: PieChart,
		},
		{
			name: "Seizoenskalender",
			url: "#",
			icon: Calendar,
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader>
				<Button>
					<Plus /> Nieuw recept
				</Button>
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
				<NavProjects projects={data.documentation} />
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={data.user} />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}
