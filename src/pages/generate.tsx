import Head from "next/head";
import { useState } from "react";
import { FormGroup } from "~/components/FormGroup";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { api } from "~/utils/api";

export default function GeneratePage() {
  const [form, setForm] = useState({
    prompt: "",
  });

  const generateIcon = api.generate.generateIcon.useMutation({
    onSuccess: (data) => {
      console.log("donkey ", data);
    },
  });

  function updateForm(key: string) {
    return function (e: React.ChangeEvent<HTMLInputElement>) {
      setForm({
        ...form,
        [key]: e.target.value,
      });
    };
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    generateIcon.mutate({
      prompt: form.prompt,
    });
  }

  return (
    <>
      <Head>
        <title>Deren Icon</title>
        <meta />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <FormGroup>
            <label htmlFor="">Prompt</label>
            <Input
              value={form.prompt}
              type="text"
              onChange={updateForm("prompt")}
            />
          </FormGroup>
          <Button variant="outline">Submit</Button>
        </form>
      </main>
    </>
  );
}
