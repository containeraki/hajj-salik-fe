import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const courses = [
    {
        id: "react-flux-building-applications",
        title: "Shipment Mecca-Mina",
        watchHref: "/track",
        authorId: "GFHTY",
        length: "K16 - GHGJK - Mecca",
        category: "K16 - GHGJK - Mina",
        track_code: "XBVUU"
    },
    {
        id: "clean-code",
        title: "Shipment Mecca-Jeddah",
        watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
        authorId: "UYVCJJ",
        length: "K16 - GHGJK - Mecca",
        category: "K16 - GHGJK - Jeddah",
        track_code: "XBVUY"
    },
    {
        id: "architecture",
        title: "Shipment Mecca-Riyadh",
        watchHref: "http://www.pluralsight.com/courses/architecting-applications-dotnet",
        authorId: "UYVCJY",
        length: "K16 - GHGJK - Mecca",
        category: "K16 - GHGJK - Riyadh",
        track_code: "XBVUP"
    },
    {
        id: "career-reboot-for-developer-mind",
        title: "Shipment Mecca-US",
        watchHref: "http://www.pluralsight.com/courses/career-reboot-for-developer-mind",
        authorId: "UYVCJ6",
        length: "K16 - GHGJK - Mecca",
        category: "K16 - GHGJK - Washingtom DC",
        track_code: "XBVUT"
    },
    {
        id: "web-components-shadow-dom",
        title: "Shipment Mecca-DXB",
        watchHref: "http://www.pluralsight.com/courses/web-components-shadow-dom",
        authorId: "HKGIIK",
        length: "K16 - GHGJK - Mecca",
        category: "K16 - GHGJK - Dubai",
        track_code: "XBVUR"
    }
];

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
    return replaceAll(course.title, ' ', '-');
};

class CourseApi {
    static getAllCourses() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Object.assign([], courses));
            }, delay);
        });
    }

    static saveCourse(course) {
        course = Object.assign({}, course); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minCourseTitleLength = 1;
                if (course.title.length < minCourseTitleLength) {
                    reject(`Title must be at least ${minCourseTitleLength} characters.`);
                }

                if (course.id) {
                    const existingCourseIndex = courses.findIndex(a => a.id === course.id);
                    courses.splice(existingCourseIndex, 1, course);
                } else {
                    //Just simulating creation here.
                    //The server would generate ids and watchHref's for new courses in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    course.id = generateId(course);
                    course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
                    courses.push(course);
                }

                resolve(course);
            }, delay);
        });
    }

    static deleteCourse(courseId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const indexOfCourseToDelete = courses.findIndex(course => course.id === courseId);
                courses.splice(indexOfCourseToDelete, 1);
                resolve();
            }, delay);
        });
    }


    static getCourse(courseId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const existingCourseIndex = courses.findIndex(course => course.id === courseId);
                
                const courseFound = Object.assign({}, courses[existingCourseIndex]);

                resolve(courseFound);

            }, delay);
        });
    }

}

export default CourseApi;
