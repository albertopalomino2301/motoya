@echo off
rem === MotoYa: sube la pagina web a GitHub Pages ===
cd /d "%~dp0"
echo.
echo Subiendo la pagina web de MotoYa...
git add -A
git diff --cached --quiet && echo No habia cambios nuevos.
git diff --cached --quiet || git commit -m "Privacidad: chat del viaje"
if errorlevel 1 goto error
git push
if errorlevel 1 goto error
echo.
echo LISTO. La pagina se actualiza en 1-2 minutos.
pause
exit /b 0

:error
echo.
echo *** Hubo un error. Toma una captura de esta ventana y enviasela a Claude. ***
pause
exit /b 1
