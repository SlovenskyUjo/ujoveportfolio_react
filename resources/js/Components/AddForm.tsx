import React from "react";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import InputLabel from "@/Components/InputLabel";
import { useForm } from "@inertiajs/react";

interface FormData {
    name: string;
    description: string;
    image: File | null;
    category: string;
    url: string;
    github_url: string;
}

const AddPluginForm: React.FC = () => {
    const { data, setData, post, processing, errors, reset } = useForm<FormData>({
        name: "",
        description: "",
        image: null,
        category: "",
        url: "",
        github_url: "",
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Prepare FormData object for file upload
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("category", data.category);
        formData.append("url", data.url);
        formData.append("github_url", data.github_url);

        if (data.image) {
            formData.append("image", data.image);
        }

        // Post the form data using Inertia
        post("/dashboard/projects", {
            data: formData,
            onSuccess: () => reset(),
            headers: { 'Content-Type': 'multipart/form-data' }
        });
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        setData("image", file);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            {/* Name Input */}
            <div className="container m-3">
                <InputLabel htmlFor="name" value="Name" />
                <TextInput
                    id="name"
                    type="text"
                    className="mt-1 block w-full"
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                    required
                    autoFocus
                    autoComplete="name"
                />
                <InputError className="mt-2" message={errors.name} />
            </div>

            {/* Description Textarea */}
            <div className="container m-3">
                <InputLabel htmlFor="description" value="Description" />
                <textarea
                    id="description"
                    className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                    rows={5}
                    value={data.description}
                    onChange={(e) => setData("description", e.target.value)}
                    required
                    autoComplete="description"
                />
                <InputError className="mt-2" message={errors.description} />
            </div>

            {/* Category Select */}
            <div className="container m-3">
                <InputLabel htmlFor="category" value="Category" />
                <select
                    id="category"
                    value={data.category}
                    onChange={(e) => setData("category", e.target.value)}
                    required
                    className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                >
                    <option value="" disabled>
                        Select category
                    </option>
                    <option value="Vue">Vue</option>
                    <option value="React">React</option>
                    <option value="Angular">Angular</option>
                    <option value="Java">Java</option>
                    {/* Add more categories */}
                </select>
                <InputError className="mt-2" message={errors.category} />
            </div>

            {/* URL Input */}
            <div className="container m-3">
                <InputLabel htmlFor="url" value="URL" />
                <TextInput
                    id="url"
                    type="text"
                    className="mt-1 block w-full"
                    value={data.url}
                    onChange={(e) => setData("url", e.target.value)}
                    required
                    autoComplete="url"
                />
                <InputError className="mt-2" message={errors.url} />
            </div>

            {/* GitHub URL Input */}
            <div className="container m-3">
                <InputLabel htmlFor="github_url" value="GitHub URL" />
                <TextInput
                    id="github_url"
                    type="text"
                    className="mt-1 block w-full"
                    value={data.github_url}
                    onChange={(e) => setData("github_url", e.target.value)}
                    placeholder="Enter GitHub URL (optional)"
                />
                <InputError className="mt-2" message={errors.github_url} />
            </div>

            {/* Image Upload */}
            <div className="container m-3">
                <InputLabel htmlFor="image" value="Image" />
                <div className="mt-1 flex items-center">
                    <label
                        htmlFor="image"
                        className="cursor-pointer bg-white rounded-md border border-gray-300 py-2 px-4 flex items-center justify-center w-full"
                    >
                        <span className="text-primary">Select a file</span>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            onChange={handleFileUpload}
                            required
                            className="hidden"
                        />
                    </label>
                    <span className="ml-2">{data.image && data.image.name}</span>
                </div>
                <InputError className="mt-2" message={errors.image} />
            </div>

            {/* Submit Button */}
            <div className="container m-3">
                <PrimaryButton
                    type="submit"
                    className={`w-full justify-center ${
                        processing ? "opacity-25" : ""
                    }`}
                    disabled={processing}
                >
                    Add new plugin!
                </PrimaryButton>
            </div>
        </form>
    );
};

export default AddPluginForm;
