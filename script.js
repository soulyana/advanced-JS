 /**
  * Everything is an object
  * Inheritance & the Prototype Chain 
  */

  /**
   * Every JavaScript object has a prototype property, which makes inheritance possible in JavaScript:
   * 
   * The prototype property of an object is where we put methods and properties that we want other objects to inherit:
   * 
   * The Constructor's prototype property is NOT the prototype of the Constructor itself, it's the prototype of ALL instances that are created through it:
   * 
   * When a certain method (or property) is called, the search starts in the object itself, and if it cannot be found, the search moves on to the object's prototype. This continues until the method is found: prototype chain,
   */

   /**
    * Creating Objects: Function Constructor
    */
   /*

    var john = {
        name: 'John',
        yearOfBirth: 1990,
        job: 'teacher'
    };

    var Person = function(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    Person.prototype.calculateAge = function() {
        console.log(2019 - this.yearOfBirth);
    }

    Person.prototype.lastName = 'Smith';

    var john = new Person('John', 1990, 'teacher');
    var jane = new Person('Jane', 1969, 'designer');
    var mark = new Person('Mark', 1948, 'retired');


    john.calculateAge();
    jane.calculateAge();
    mark.calculateAge();

    console.log(jane.lastName);
    console.log(john.lastName);
    console.log(mark.lastName); 

    /**
     * The prototype chain in the console
     */
    /*

     console.log(jane);
     console.log(john.prototype);
     console.log(Person);
     console.log(john._proto_);
     console.log(john.hasOwnProperty('job'));
     console.log(john.hasOwnProperty('lastName')); // not own property
     console.log(john instanceof Person);

     var x = [2,4,6];
     console.info(x);
     console.log(x.length);
     */

     /**
      * Creating Objects: Object.create
      */
     /*

        // Object.create
      var personProto = {
        calculateAge: function() {
            console.log(2019 - this.yearOfBirth);
        }
      }

      var john = Object.create(personProto);
      john.name = 'John';
      john.yearOfBirth = 1990;
      john.job = 'teacher';

      var jane = Object.create(personProto, {
          name: { value: 'Jane' },
          yearOfBirth: { value: 1969 },
          job: { value: 'designer' }
      });
      */

      /**
       * Primitives vs Objects
       */
      /*

       // Primitives
       var a = 23;
       var b = a;
       a = 46;
       console.log(a);
       console.log(b);

       // Objects
       var obj1 = {
           name: 'John',
           age: 26
       };
       var obj2 = obj1;
       obj1.age = 31;
       console.log(obj1.age);
       console.log(obj2.age);

       // Functions
       var age = 27;
       var obj = {
           name: 'Jonas',
           city: 'Lisbon'
       };

       function change(a, b) {
           a = 30;
           b.city = 'San Francisco';
       }

       change(age, obj);

       console.log(age);
       console.log(obj.city);
       */
      /**
       * First Class Functions: Passing Functions as Arguments
       */
      /*

       var years = [1990, 1965, 1937, 2005, 1998]

       function arrayCalc(arr, fn) {
           var arrRes = [];
           for (var i = 0; i < arr.length; i++) {
               arrRes.push(fn(arr[i]));
           }
           return arrRes;
       }

       function calculateAge(el) {
           return 2019 - el;
       }

       function isFullAge(el) {
           return el >= 18;
       }

       function maxHeartRate (el) {
           if ( el >= 18 && el <= 81) {
                return Math.round(206.9 - (0.67 * el));
           } else {
               return -1;
           }
          
       }

       var ages = arrayCalc(years, calculateAge);
       var fullAge = arrayCalc(ages, isFullAge);
       var rates = arrayCalc(ages, maxHeartRate);

       console.log(ages);
       console.log(fullAge);
       console.log(rates);
       */

       /**
        * First Class Functions: Functions Returning Functions
        */
       /*

        function interviewQuestion(job) {
            if (job === 'designer') {
                return function(name) {
                    console.log(name + ', can you please explain what UX design is?');
                }
            } else if (job === 'teacher') {
                return function(name) {
                    console.log(name + ', what subject do you teach?');
                }
            } else {
                return function(name) {
                    console.log('Hello, ' + name + ', what do you do?');
                }
            }
        }

        var teacherQuestion = interviewQuestion('teacher');
        var designerQuestion = interviewQuestion('designer');

        teacherQuestion('John');
        designerQuestion('Jane');
        designerQuestion('Mike');
        designerQuestion('mark');

        interviewQuestion('teacher')('James');
        */

        /**
         * Immediately Invoked Function Expressions (IIFE)
         * used for data privacy and code modularity
         */
        /*


        //  function game() {
        //      var score = Math.random() * 10;
        //      console.log(score >= 5);
        //  }
        //  game();

         (function () {
            var score = Math.random() * 10;
            console.log(score >= 5);
         })();

        //  console.log(score);

         (function (goodLuck) {
            var score = Math.random() * 10;
            console.log(score >= 5 - goodLuck);
         })(5);
         */

         /**
          * Closures:
          * An inner function has always access to the variables and parameters of its outr function, even after the outer function has returned
          * built-into javascript
          */
         /*

          function retirement(retirementAge) {
              var a = ' years left until retirement!!';
              return function(yearOfBirth) {
                  var age = 2019 - yearOfBirth;
                  console.log((retirementAge - age) + a);
              }
          }

          var retirementUS = retirement(66);
          var retirementGermany = retirement(65);
          var retirementIceland = retirement(67);

          // retirement(66)(1988);

          retirementUS(1988);
          retirementGermany(1988);
          retirementIceland(1988);

          // Challenge - rewrite interview function

          function interviewQuestion(job) {
              return function(name) {
                if (job === 'designer') {
                    console.log(name + ', can you please explain what UX design is?');
                } else if (job === 'teacher') {
                    console.log(name + ', what subject do you teach?');
                } else {
                    console.log('Hello, ' + name + ', what do you do?');
                }
              }
          }

          interviewQuestion('teacher')('John');
          */

          /**
           * Bind, Call and Apply
           */

           var john = {
                name: 'John',
                age: 26,
                job: 'teacher',
                presentation: function(style, timeOfDay) {
                    if (style === 'formal') {
                        console.log('Good ' + timeOfDay + ', ladies and genteleman! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
                    } else if (style === 'friendly') {
                        console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
                    }
                }
           }

           var emily = {
               name: 'Emily',
               age: 35,
               job: 'designer'
           };

           john.presentation('formal', 'morning');

           // Method borrowing via call 
           john.presentation.call(emily, 'friendly', 'afternoon');

           // john.presentation.apply(emily, ['friendly', 'morning']); // won't work because we're not expecting an array

           // bind method is similar to call method; generates a copy of the function; can create functions with preset arguments
           var johnFriendly = john.presentation.bind(john, 'friendly');
           johnFriendly('morning');
           johnFriendly('evening'); // carrying - a techniqure where we create a function based on another function but with some preset parameters

           var emilyFormal = john.presentation.bind(emily, 'formal');
           emilyFormal('afternoon');

           var years = [1990, 1965, 1937, 2005, 1998]

           function arrayCalc(arr, fn) {
               var arrRes = [];
               for (var i = 0; i < arr.length; i++) {
                   arrRes.push(fn(arr[i]));
               }
               return arrRes;
           }
    
           function calculateAge(el) {
               return 2019 - el;
           }
    
           function isFullAge(limit, el) {
               return el >= limit;
           }

           var ages = arrayCalc(years, calculateAge);
           var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
           console.log(ages);
           console.log(fullJapan);
