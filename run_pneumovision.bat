@echo off
title PneumoVision Launcher
echo ===================================================
echo         Starting PneumoVision Local Host           
echo ===================================================
echo.

:: 1. Check Python installation
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Python is not installed or not in PATH!
    echo Please install Python 3.9+ and try again.
    pause
    exit /b
)

:: 2. Check Node.js installation
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed or not in PATH!
    echo Please install Node.js and try again.
    pause
    exit /b
)

echo [1/2] Launching Backend Server (FastAPI on http://localhost:8000)...
start "PneumoVision Backend (FastAPI)" cmd /k "cd /d %~dp0backend && python -m uvicorn main:app --reload --host 0.0.0.0 --port 8000"

echo [2/2] Launching Frontend App (Vite React on http://localhost:5173)...
start "PneumoVision Frontend (Vite React)" cmd /k "cd /d %~dp0frontend && npm run dev"

echo.
echo ===================================================
echo  Both servers are starting in separate windows!
echo  - Frontend: http://localhost:5173
echo  - Backend Docs: http://localhost:8000/docs
echo  DO NOT close those command windows to keep app live.
echo ===================================================
echo.
pause
