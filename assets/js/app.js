/**
 * Skill Bridge - Main JavaScript
 * Theme toggle, module dropdown, code copy, checklist
 */
(function () {
    'use strict';

    // Theme toggle
    const html = document.documentElement;
    const themeBtn = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);

    // Update highlight.js theme based on data-theme
    function updateHighlightTheme(theme) {
        const lightTheme = document.querySelector('link[href*="github.min.css"]');
        const darkTheme = document.querySelector('link[href*="github-dark.min.css"]');

        if (lightTheme && darkTheme) {
            if (theme === 'dark') {
                lightTheme.disabled = true;
                darkTheme.disabled = false;
            } else {
                lightTheme.disabled = false;
                darkTheme.disabled = true;
            }
        }
    }

    // Apply initial highlight theme
    updateHighlightTheme(savedTheme);

    if (themeBtn) {
        themeBtn.addEventListener('click', function () {
            const current = html.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
            updateHighlightTheme(next);
        });
    }

    // Module dropdown
    const dropdown = document.getElementById('moduleDropdown');
    if (dropdown) {
        const toggle = dropdown.querySelector('.dropdown-toggle');

        toggle.addEventListener('click', function (e) {
            e.stopPropagation();
            dropdown.classList.toggle('open');
        });

        document.addEventListener('click', function (e) {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('open');
            }
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                dropdown.classList.remove('open');
            }
        });
    }

    // Module select (alternative to dropdown)
    const moduleSelect = document.getElementById('moduleSelect');
    if (moduleSelect) {
        moduleSelect.addEventListener('change', function () {
            if (this.value) {
                window.location.href = this.value;
            }
        });
    }

    // Checklist persistence
    const checkboxes = document.querySelectorAll('.checklist-checkbox');
    const savedProgress = JSON.parse(localStorage.getItem('moduleProgress') || '{}');

    checkboxes.forEach(function (cb) {
        const mod = cb.dataset.module;
        if (mod && savedProgress[mod]) {
            cb.classList.add('checked');
        }

        cb.addEventListener('click', function () {
            cb.classList.toggle('checked');
            if (mod) {
                savedProgress[mod] = cb.classList.contains('checked');
                localStorage.setItem('moduleProgress', JSON.stringify(savedProgress));
            }
        });
    });

    // Code copy button
    function addCopyButtons() {
        const codeBlocks = document.querySelectorAll('pre');

        codeBlocks.forEach(function (pre) {
            // Skip if already has copy button
            if (pre.querySelector('.copy-btn')) return;

            // Create wrapper if needed
            let wrapper = pre.parentElement;
            if (!wrapper.classList.contains('code-wrapper')) {
                wrapper = document.createElement('div');
                wrapper.className = 'code-wrapper';
                pre.parentNode.insertBefore(wrapper, pre);
                wrapper.appendChild(pre);
            }

            // Create copy button
            const btn = document.createElement('button');
            btn.className = 'copy-btn';
            btn.setAttribute('aria-label', 'Copy code');
            btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>';

            btn.addEventListener('click', function () {
                const code = pre.querySelector('code');
                const text = code ? code.textContent : pre.textContent;

                navigator.clipboard.writeText(text).then(function () {
                    btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>';
                    btn.classList.add('copied');

                    setTimeout(function () {
                        btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>';
                        btn.classList.remove('copied');
                    }, 2000);
                }).catch(function () {
                    // Fallback for older browsers
                    const textarea = document.createElement('textarea');
                    textarea.value = text;
                    textarea.style.position = 'fixed';
                    textarea.style.opacity = '0';
                    document.body.appendChild(textarea);
                    textarea.select();
                    try {
                        document.execCommand('copy');
                        btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>';
                        btn.classList.add('copied');
                        setTimeout(function () {
                            btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>';
                            btn.classList.remove('copied');
                        }, 2000);
                    } catch (e) {
                    }
                    document.body.removeChild(textarea);
                });
            });

            wrapper.appendChild(btn);
        });
    }

    // Initialize copy buttons
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addCopyButtons);
    } else {
        addCopyButtons();
    }

})();
