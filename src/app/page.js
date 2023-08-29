export default function Home() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h1 className="text-2xl font-bold mb-4">User Preferences</h1>
                <label className="block mb-4">
                    Choose your preference:
                    <select className="block w-full px-4 py-2 border rounded bg-gray-200 focus:outline-none">
                        <option value="theme: dark">Dark Theme</option>
                        <option value="theme: light">Light Theme</option>
                        <option value="language: en">English Language</option>
                        <option value="language: fr">French Language</option>
                    </select>
                </label>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none">
                    Set Preference
                </button>
                <br />
                <p className="mb-4">
                    Your preference is:
                    <span className="font-semibold"></span>
                </p>
            </div>
        </div>
    );
}
