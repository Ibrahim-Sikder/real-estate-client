/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { TProject } from "@/types/project";
import { useEffect, useState } from "react";

export const useProjectData = () => {
    const [projectDate, setProjectData] = useState<TProject[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);



    useEffect(() => {
        const fetchProjectData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/project?limit=1000`, {
                    cache: "no-store",
                });
                const data = await response.json();
                setProjectData(data?.data?.projects || []);
            } catch (err) {
                setError("Failed to fetch project data!");
            } finally {
                setLoading(false);
            }
        };

        fetchProjectData();
    }, []);

    return { projectDate, loading, error };
};
