angular
	.module('avengersApp')	
	.service('dataService', function() { // A service is a conststructor function!!!

		var teamAvengers = [
		    {
		        "id": 1009368,
		        "name": "Iron Man",
		        "description": "Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.",
		        "modified": "2013-11-07T10:55:38-0500",
		        "thumbnail": {
		            "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/60/55b6a28ef24fa",
		            "extension": "jpg"
		        }
		    },
		    {
		        "id": 1009351,
		        "name": "Hulk",
		        "description": "Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets.",
		        "modified": "2014-06-10T16:12:58-0400",
		        "thumbnail": {
		            "path": "http://x.annihil.us/u/prod/marvel/i/mg/e/e0/537bafa34baa9",
		            "extension": "jpg"
		        }
		    },
		    {
		        "id": 1009220,
		        "name": "Captain America",
		        "description": "Vowing to serve his country any way he could, young Steve Rogers took the super soldier serum to become America's one-man army. Fighting for the red, white and blue for over 60 years, Captain America is the living, breathing symbol of freedom and liberty.",
		        "modified": "2014-06-10T16:13:04-0400",
		        "thumbnail": {
		            "path": "http://x.annihil.us/u/prod/marvel/i/mg/9/80/537ba5b368b7d",
		            "extension": "jpg"
		        }
		    },
		    {
		        "id": 1009664,
		        "name": "Thor",
		        "description": "As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate.  He's self-assured, and he would never, ever stop fighting for a worthwhile cause.",
		        "modified": "2016-01-05T12:33:20-0500",
		        "thumbnail": {
		            "path": "http://x.annihil.us/u/prod/marvel/i/mg/7/10/537bc71e9286f",
		            "extension": "jpg"
		        }
		    },
		    {
		        "id": 1009189,
		        "name": "Black Widow",
		        "description": "Natasha Romanova, known by many aliases, is an expert spy, athlete, and assassin. Trained at a young age by the KGB's infamous Red Room Academy, the Black Widow was formerly an enemy to the Avengers. She later became their ally after breaking out of the U.S.S.R.'s grasp, and also serves as a top S.H.I.E.L.D. agent.",
		        "modified": "2016-01-04T18:09:26-0500",
		        "thumbnail": {
		            "path": "http://x.annihil.us/u/prod/marvel/i/mg/3/40/537ba41563b66",
		            "extension": "jpg"
		        }
		    },
		    {
		        "id": 1009471,
		        "name": "Nick Fury",
		        "description": "Colonel Nicholas \"Nick\" Joseph Fury was an espionage veteran of the CIA during the Cold War. He joined S.H.I.E.L.D., an organization which operates as humanity's first line of defense against Earth's most dangerous enemies. He quickly was promoted to the position of Director, becoming the leader of S.H.I.E.L.D. He led S.H.I.E.L.D. for years, spearheading the Avengers Initiative, Project T.A.H.I.T.I., Project Insight, and other operations.",
		        "modified": "2013-10-18T17:26:42-0400",
		        "thumbnail": {
		            "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/c0/5261a745e658d/standard_xlarge",
		            "extension": "jpg"
		        }
		    },
		    {
		        "id": 1009338,
		        "name": "Hawkeye",
		        "description": "Clinton Barton was a former circus worker and criminal-turned-hero, who received his archery skills as a young boy through training with Swordsman and Trickshot. Barton would eventually join both the East Coast and West Coast branches of The Avengers under the alias 'Hawkeye', even leading at one time.",
		        "modified": "2013-01-22T14:01:53-0500",
		        "thumbnail": {
		            "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/80/537badc422600",
		            "extension": "jpg"
		        }
		    },
		    {
		        "id": 1009297,
		        "name": "Falcon",
		        "description": "With a mental connection to all birds and a suit that gives him wings to fly, The Falcon has been both the partner to Captain America and an Avenger himself. Whether as a super hero or in his secret identity of social worker Sam Wilson, The Falcon dedicates his life to standing up for others.",
		        "modified": "2013-02-05T13:34:32-0500",
		        "thumbnail": {
		            "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/20/537baa87dbe40",
		            "extension": "jpg"
		        }
		    },
		    {
		        "id": 1009524,
		        "name": "Quicksilver",
		        "description": "",
		        "modified": "2014-03-05T13:43:15-0500",
		        "thumbnail": {
		            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/f0/53176ffc42f58",
		            "extension": "jpg"
		        }
		    },
		    {
		        "id": 1010338,
		        "name": "Captain Marvel",
		        "description": "",
		        "modified": "2014-07-08T18:17:18-0400",
		        "thumbnail": {
		            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/80/5269608c1be7a",
		            "extension": "jpg"
		        }
		    },
		    {
		        "id": 1009610,
		        "name": "Spider-Man",
		        "description": "Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider. Adopting the name Spider-Man, Peter hoped to start a career using his new abilities. Taught that with great power comes great responsibility, Spidey has vowed to use his powers to help people.",
		        "modified": "2014-06-02T12:35:16-0400",
		        "thumbnail": {
		            "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b",
		            "extension": "jpg"
		        }
		    },
		    {
		        "id": 1009718,
		        "name": "Wolverine",
		        "description": "Born with super-human senses and the power to heal from almost any wound, Wolverine was captured by a secret Canadian organization and given an unbreakable skeleton and claws. Treated like an animal, it took years for him to control himself. Now, he's a premiere member of both the X-Men and the Avengers.",
		        "modified": "2014-06-10T16:13:25-0400",
		        "thumbnail": {
		            "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf",
		            "extension": "jpg"
		        }
		    },
		    {
		        "id": 1010802,
		        "name": "Ant-Man",
		        "description": "Scott Lang was a thief who became Ant-Man after stealing the Ant-Man suit to save his daughter Cassie Lang from a heart condition. Reforming from his life of crime, Lang soon took on a full-time career as Ant-Man.",
		        "modified": "2014-03-05T13:20:04-0500",
		        "thumbnail": {
		            "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/53176aa9df48d",
		            "extension": "jpg"
		        }
		    },
		    {
		        "id": 1009719,
		        "name": "Wonder Man",
		        "description": "Simon Williams agreed to undergo an experiment to give him superhuman powers, and Baron Zemo gave him the costumed guise of Wonder Man, warning Simon that he would die without further treatments from Zemo in order to ensure his loyalty, but Simon betrayed Zemo to the Avengers and ultimately joined their ranks.",
		        "modified": "2011-08-09T14:58:20-0400",
		        "thumbnail": {
		            "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/40/4ce5a205a2322",
		            "extension": "jpg"
		        }
		    },
		    {
		        "id": 1009562,
		        "name": "Scarlet Witch",
		        "description": "",
		        "modified": "2013-10-18T17:31:00-0400",
		        "thumbnail": {
		            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/70/5261a7d7c394b",
		            "extension": "jpg"
		        }
		    }
		];

		this.avengers = function() {

			var newAvengers = [];

			for (var prop in teamAvengers){
				newAvengers.push({name: teamAvengers[prop].name, description: teamAvengers[prop].description, thumbnail: teamAvengers[prop].thumbnail })
			}

			return newAvengers;

		}


		// create a new array that has objects with only
		// "name", "description", and "thumbnail". set
		// the new array to `this.avengers`.

	}); //end dataService
