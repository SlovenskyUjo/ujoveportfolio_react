<?php

namespace App\Http\Controllers;

use App\Models\Plugin;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Dashboard/DashboardProjects', [
            'plugins' => Plugin::all()
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|min:1|max:50',
            'description' => 'required|min:1|max:244',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'category' => 'required|string|max:255',
            'url' => 'required|max:254',
            'github_url' => 'nullable|url|max:255',
        ]);

        $path = $request->file('image')->store('public');
        $fileName = basename($path);

        $imageUrl = asset('storage/' . $fileName);

        $plugin = Plugin::create([
            'name' => $request->name,
            'description' => $request->description,
            'image' => $imageUrl,
            'category' => $request->category,
            'url' => $request->url,
            'github_url' => $request->github_url ?: null,
        ]);


        return redirect(route('welcome'));
    }

    public function destroy($id)
    {
        $plugin = Plugin::find($id);

        if (!$plugin) {
            return response()->json(['message' => 'Project not found.'], 404);
        }

        $plugin->delete();

        return response()->json(['success' => true]);
    }

    public function getProjects()
    {
        return response()->json(Plugin::all());
    }
}
