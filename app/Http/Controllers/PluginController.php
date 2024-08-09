<?php

namespace App\Http\Controllers;

use App\Models\Plugin;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PluginController extends Controller
{
    public function index()
    {
        return Inertia::render('Welcome', [
            'plugins' => Plugin::all()
        ]);
    }
}
