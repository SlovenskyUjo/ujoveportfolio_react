<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PluginController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('welcome');

Route::get('/', [PluginController::class, 'index'])->name('welcome');

Route::get('/api/projects', [DashboardController::class, 'getProjects'])->name('api.projects');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard/Dashboard');
})->middleware(['auth', 'verified', \App\Http\Middleware\AdminMiddleware::class])->name('dashboard');

Route::middleware(['auth', \App\Http\Middleware\AdminMiddleware::class])->group(function () {
    Route::get('/dashboard/projects', [DashboardController::class, 'index'])->name('dashboard.show');
    Route::post('/dashboard/projects', [DashboardController::class, 'store'])->name('dashboard.create');
    Route::delete('/dashboard/projects/{id}', [DashboardController::class, 'destroy'])->name('dashboard.destroy');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
