 // Predefined lists of common female and male names (100 each)
        const femaleNames = [
            "Emma", "Olivia", "Ava", "Sophia", "Isabella",
            "Mia", "Amelia", "Harper", "Evelyn", "Ella",
            "Chloe", "Grace", "Lily", "Aria", "Zoe",
            "Charlotte", "Layla", "Scarlett", "Nora", "Mila",
            "Addison", "Lucy", "Stella", "Sophie", "Riley",
            "Aubrey", "Madison", "Lila", "Victoria", "Hannah",
            "Kylie", "Brianna", "Sarah", "Alice", "Claire",
            "Megan", "Natalie", "Penelope", "Brooklyn", "Luna",
            "Savannah", "Audrey", "Bella", "Skylar", "Sadie",
            "Ruby", "Lydia", "Jasmine", "Nina", "Sienna",
            "Elena", "Maria", "Freya", "Gianna", "Ariana",
            "Piper", "Kinsley", "Addie", "Cora", "Ellie",
            "Willow", "Taylor", "Ashley", "Katherine", "Paige",
            "Maya", "Tessa", "June", "Olive", "Cecilia",
            "Ivy", "Rory", "Vivian", "Sage", "Anastasia",
            "Esme", "Renee", "Delilah", "Fiona", "Kiara",
        ];

        const maleNames = [
            "Liam", "Noah", "Oliver", "Elijah", "James",
            "William", "Benjamin", "Lucas", "Henry", "Alexander",
            "Mason", "Michael", "Sebastian", "Jack", "Aiden",
            "Samuel", "David", "Joseph", "Carter", "Luke",
            "Owen", "Daniel", "Matthew", "Wyatt", "Gabriel",
            "Anthony", "Isaiah", "Dylan", "Levi", "Isaac",
            "Caleb", "Asher", "Nolan", "Julian", "Charles",
            "Jaxon", "Christian", "Hudson", "Dominic", "Roman",
            "Aaron", "Elias", "Colton", "Adrian", "Grayson",
            "Xavier", "Josiah", "Chase", "Zachary", "Ethan",
            "Ryder", "Cameron", "Luka", "Miles", "Evan",
            "Jude", "Lorenzo", "Dante", "Jett", "Maddox",
            "Beckham", "Harrison", "Sawyer", "Kaden", "Ronan",
            "Jasper", "Marcus", "Finn", "Theo", "Silas",
        ];

        // Shuffle function to randomize names
        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        // Initialize shuffled names
        shuffle(femaleNames);
        shuffle(maleNames);

        // Function to generate a random age
        function generateRandomAge() {
            const ageRange = [20, 40]; // Age between 20 and 40
            const minAge = 25; // Minimum for the majority
            const maxAge = 35; // Maximum for the majority

            return Math.random() < 0.8 
                ? Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge 
                : Math.floor(Math.random() * (ageRange[1] - ageRange[0] + 1)) + ageRange[0];
        }

        // Function to get a random avatar
        function getRandomAvatar() {
            const randomNum = Math.floor(Math.random() * 1000); // Random number for uniqueness
            return `https://picsum.photos/200/200?random=${randomNum}`;
        }

        // Function to generate initial profiles
        function generateProfiles() {
            const femaleProfilesContainer = document.getElementById('femaleProfiles');
            const maleProfilesContainer = document.getElementById('maleProfiles');

            for (let i = 0; i < 5; i++) {
                const femaleProfile = createProfile(femaleNames[i], generateRandomAge(), getRandomAvatar(), 'Female');
                femaleProfilesContainer.appendChild(femaleProfile);
            }

            for (let i = 0; i < 5; i++) {
                const maleProfile = createProfile(maleNames[i], generateRandomAge(), getRandomAvatar(), 'Male');
                maleProfilesContainer.appendChild(maleProfile);
            }
        }

        // Function to create a profile element
        function createProfile(name, age, avatar, gender) {
            const profileDiv = document.createElement('div');
            profileDiv.className = 'profile';

            const onlineStatus = document.createElement('div');
            onlineStatus.className = 'online';
            onlineStatus.textContent = 'Online';

            const img = document.createElement('img');
            img.src = avatar;
            img.alt = `${name}'s Avatar`;

            const profileName = document.createElement('p');
            profileName.textContent = name; // Only show name here

            const profileAge = document.createElement('p');
            profileAge.textContent = `Age: ${age}`; // Show age in a formatted way

            profileDiv.appendChild(img);
            profileDiv.appendChild(onlineStatus);
            profileDiv.appendChild(profileName);
            profileDiv.appendChild(profileAge); // Add age to the profile

            profileDiv.addEventListener('click', showComingSoon); // Click event for profiles

            return profileDiv;
        }

        // Function to update one female and one male profile
        function updateSingleProfile() {
            const femaleProfilesContainer = document.getElementById('femaleProfiles');
            const maleProfilesContainer = document.getElementById('maleProfiles');

            // Update a random female profile
            const randomFemaleIndex = Math.floor(Math.random() * femaleProfilesContainer.children.length);
            const randomFemaleProfile = femaleProfilesContainer.children[randomFemaleIndex];
            const newFemaleName = femaleNames[Math.floor(Math.random() * femaleNames.length)];
            const newFemaleAge = generateRandomAge();
            const newFemaleAvatar = getRandomAvatar();
            randomFemaleProfile.innerHTML = ''; // Clear existing content
            randomFemaleProfile.appendChild(createProfile(newFemaleName, newFemaleAge, newFemaleAvatar, 'Female'));

            // Update a random male profile
            const randomMaleIndex = Math.floor(Math.random() * maleProfilesContainer.children.length);
            const randomMaleProfile = maleProfilesContainer.children[randomMaleIndex];
            const newMaleName = maleNames[Math.floor(Math.random() * maleNames.length)];
            const newMaleAge = generateRandomAge();
            const newMaleAvatar = getRandomAvatar();
            randomMaleProfile.innerHTML = ''; // Clear existing content
            randomMaleProfile.appendChild(createProfile(newMaleName, newMaleAge, newMaleAvatar, 'Male'));
        }

        // Event listeners for Login and Sign Up buttons
        document.getElementById('loginButton').addEventListener('click', showComingSoon);
        document.getElementById('signupButton').addEventListener('click', showComingSoon);

        // Initial profile display
        generateProfiles();

        // Change one female and one male profile every 5 seconds
        setInterval(updateSingleProfile, 5000); // Update every 5 seconds

        function showComingSoon() {
            const messageArea = document.getElementById('messageArea');
            messageArea.style.display = 'block';
            messageArea.textContent = 'Service Coming Soon';

            // Scroll to the top of the page
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Smooth scrolling
            });

            setTimeout(() => {
                messageArea.style.display = 'none';
            }, 3000);
        }
 // Function to open email client
 function sendEmail(subject) {
        const email = 'contact@fdating.net';
        const body = `Subject: ${subject}\n\n`;
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }

    // Add event listeners
    document.getElementById('makeOfferButton').addEventListener('click', function() {
        sendEmail('Make an Offer');
    });

    document.getElementById('inquiryButton').addEventListener('click', function() {
        sendEmail('Inquiry');
    });
