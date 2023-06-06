"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

const CreatePrompt = () => {
    const { data : session } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (!session) {
            router.push('/');
        }
    }, []);

    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt : '',
        plataforma : '',
        tag : '',
    });


    const createPrompt = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const response = await fetch('/api/prompt/new', {
                method : 'POST',
                body : JSON.stringify({
                    prompt : post.prompt,
                    userId : session?.user.id,
                    plataforma : post.plataforma,
                    tag : post.tag,
                })
            });

            if (response.ok) {
                router.push('/');
            }
        } catch (error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <Form 
            type="Crea"
            post={post}
            setPost={setPost}
            submitting={submitting}
            handleSubmit={createPrompt}
        />
    )
}

export default CreatePrompt