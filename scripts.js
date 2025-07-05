        let timeEntries = [];
        let totalMinutes = 0;

        function addTime() {
            const title = document.getElementById('title').value.trim();
            const hours = parseInt(document.getElementById('hours').value) || 0;
            const minutes = parseInt(document.getElementById('minutes').value) || 0;

            if (!title) {
                alert('Please enter a title for this time entry.');
                return;
            }

            if (hours === 0 && minutes === 0) {
                alert('Please enter a valid time (hours and/or minutes).');
                return;
            }

            const entry = {
                id: Date.now(),
                title: title,
                hours: hours,
                minutes: minutes,
                totalMinutes: hours * 60 + minutes
            };

            timeEntries.push(entry);
            totalMinutes += entry.totalMinutes;

            updateDisplay();
            clearInputs();
        }

        function deleteTime(id) {
            const entryIndex = timeEntries.findIndex(entry => entry.id === id);
            if (entryIndex > -1) {
                totalMinutes -= timeEntries[entryIndex].totalMinutes;
                timeEntries.splice(entryIndex, 1);
                updateDisplay();
            }
        }

        function clearAll() {
            if (confirm('Are you sure you want to clear all time entries?')) {
                timeEntries = [];
                totalMinutes = 0;
                updateDisplay();
            }
        }

        function updateDisplay() {
            updateTotalTime();
            updateTimesList();
        }

        function updateTotalTime() {
            const hours = Math.floor(totalMinutes / 60);
            const minutes = totalMinutes % 60;
            document.getElementById('totalTime').textContent = 
                `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        }

        function updateTimesList() {
            const listElement = document.getElementById('timesList');
            const clearBtn = document.getElementById('clearBtn');

            if (timeEntries.length === 0) {
                listElement.innerHTML = '<div class="empty-state">No time entries yet. Add some times to get started!</div>';
                clearBtn.style.display = 'none';
            } else {
                listElement.innerHTML = timeEntries.map(entry => `
                    <div class="time-entry">
                        <div class="time-entry-title">${entry.title}</div>
                        <div class="time-entry-time">${entry.hours.toString().padStart(2, '0')}:${entry.minutes.toString().padStart(2, '0')}</div>
                        <button class="delete-btn" onclick="deleteTime(${entry.id})">×</button>
                    </div>
                `).join('');
                clearBtn.style.display = 'block';
            }
        }

        function clearInputs() {
            document.getElementById('title').value = '';
            document.getElementById('hours').value = '';
            document.getElementById('minutes').value = '';
        }

        // Add keyboard support
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                addTime();
            }
        });

        // Initialize display
        updateDisplay();