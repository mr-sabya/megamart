<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


Route::get('/login', [App\Http\Controllers\Auth\LoginController::class, 'showLoginForm'])->name('login');
Route::get('/logout', [App\Http\Controllers\Auth\LogoutController::class, 'logout'])->name('logout');
Route::get('/register', [App\Http\Controllers\Auth\RegisterController::class, 'showRegisterForm'])->name('register');

Route::middleware(['auth'])->group(function () {
    Route::get('/', [App\Http\Controllers\Pages\HomeController::class, 'index'])->name('home');
    Route::get('categories', [App\Http\Controllers\Pages\CategoryController::class, 'index'])->name('category');
});
