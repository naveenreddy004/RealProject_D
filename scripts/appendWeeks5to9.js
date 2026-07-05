// Script to close the course-data-java-fullstack.js file properly
// and add weeks 5-9 as structured entries
const fs = require('fs');
const path = require('path');
const target = path.join(__dirname, '..', 'public', 'course-data-java-fullstack.js');

function makeWeek(id, title, topics, weekQuizItems, projectTitle, projectDesc, projectReqs) {
  return {id, title, topics, weekQuiz: weekQuizItems, miniProject:{title:projectTitle, description:projectDesc, requirements:projectReqs}};
}

function makeTopic(id, title, ytId, ytTitle, ytChannel, ytDur, ytDesc, sections, taskTitle, taskInstructions, taskHint, resources, quizItems) {
  return { id, title, video:{youtubeId:ytId,title:ytTitle,channel:ytChannel,duration:ytDur,description:ytDesc}, content:{sections, practiceTask:{title:taskTitle,instructions:taskInstructions,hint:taskHint}, resources}, quiz:quizItems };
}

// Build weeks 5-9 as a JS string to append
const weeks5to9 = `
    // ═══════ WEEK 5 — SPRING BOOT BASICS ═══════
    { id:5, title:'Spring Boot Basics',
      topics:[
        { id:1, title:'Spring Boot Setup & First REST Endpoint',
          video:{youtubeId:'9SGDpanrc8U',title:'Spring Boot Full Course',channel:'Amigoscode',duration:'3 hr',description:'Spring Boot from scratch — setup, annotations, REST controllers, JPA. Best free course.'},
          content:{ sections:[
            {heading:'🌱 What is Spring Boot?',text:'Spring Boot is the most popular Java framework for building production-ready REST APIs and web apps. It provides auto-configuration, embedded Tomcat server, and Spring Initializr scaffolding. Create a project at https://start.spring.io — select Spring Web, Spring Data JPA, MySQL Driver, Lombok, DevTools.'},
            {heading:'⚙️ application.properties',code:'spring.datasource.url=jdbc:mysql://localhost:3306/avrondb\\nspring.datasource.username=root\\nspring.datasource.password=yourpass\\nspring.jpa.hibernate.ddl-auto=update\\nspring.jpa.show-sql=true\\nserver.port=8080'},
            {heading:'🎯 First Controller',code:'@RestController\\n@RequestMapping("/api")\\npublic class HelloController {\\n    @GetMapping("/hello")\\n    public String hello() { return "Hello avRoN!"; }\\n\\n    @GetMapping("/health")\\n    public Map<String,Object> health() {\\n        return Map.of("status","UP","time",LocalDateTime.now());\\n    }\\n}'}
          ],
          practiceTask:{title:'Task — Setup & Hello World',instructions:'Create Spring Boot project. Add /api/hello and /api/info endpoints. Connect to MySQL. Run and test in Postman.',hint:'Use @RestController + @GetMapping. Return Map for JSON.'},
          resources:[{label:'Spring Initializr',url:'https://start.spring.io'},{label:'Amigoscode Spring Boot',url:'https://www.youtube.com/watch?v=9SGDpanrc8U'},{label:'Spring Official Guides',url:'https://spring.io/guides'}]},
          quiz:[{q:'@RestController combines?',opts:['@Entity + @Table','@Controller + @ResponseBody','@Service + @Repository','@Component + @Bean'],ans:1},{q:'@GetMapping("/students") handles?',opts:['POST','DELETE','GET','PUT'],ans:2},{q:'application.properties configures?',opts:['Java classes','App settings — DB, server, JPA','CSS','HTML'],ans:1},{q:'Embedded Tomcat means?',opts:['External server needed','App runs as standalone jar — no separate install',  'Docker only','Manual start'],ans:1},{q:'spring.jpa.ddl-auto=update does?',opts:['Drops tables','Updates schema to match entities','Deletes all data','Read-only'],ans:1}]},
        { id:2, title:'Dependency Injection & Bean Annotations',
          video:{youtubeId:'aX-bgylmprA',title:'Spring DI Explained',channel:'Java Brains',duration:'45 min',description:'@Component @Service @Repository @Autowired IoC container explained.'},
          content:{sections:[
            {heading:'💉 DI — Spring Manages Your Objects',text:'Spring IoC container creates and injects objects (beans). You declare dependencies, Spring provides them. Loose coupling = easy testing.\\n\\n@Component — generic bean\\n@Service — business logic\\n@Repository — data access\\n@RestController — REST API\\n\\nUse constructor injection (not field injection) — it is explicit and testable.'},
            {heading:'🏗️ 3-Layer Architecture',code:'// Repository\\n@Repository\\npublic interface StudentRepo extends JpaRepository<Student,Long>{}\\n\\n// Service\\n@Service\\npublic class StudentService {\\n    private final StudentRepo repo;\\n    public StudentService(StudentRepo repo){ this.repo=repo; }\\n    public List<Student> getAll(){ return repo.findAll(); }\\n}\\n\\n// Controller\\n@RestController @RequestMapping("/api/students")\\npublic class StudentController {\\n    private final StudentService svc;\\n    public StudentController(StudentService svc){ this.svc=svc; }\\n    @GetMapping public List<Student> all(){ return svc.getAll(); }\\n}'}
          ],
          practiceTask:{title:'Task — 3-Layer Student API',instructions:'Build Controller → Service → Repository layers. Use constructor injection everywhere. Add logging with @Slf4j.',hint:'log.info("Fetching students") in service methods.'},
          resources:[{label:'Spring DI Docs',url:'https://docs.spring.io/spring-framework/reference/core/beans/introduction.html'},{label:'JavaBrains DI',url:'https://www.youtube.com/watch?v=aX-bgylmprA'}]},
          quiz:[{q:'Constructor injection is preferred because?',opts:['Less code','Makes dependencies explicit + works with final fields + easier to test','Required','Faster'],ans:1},{q:'@Repository adds what extra?',opts:['URL mapping','Exception translation for DB errors','Security','Caching'],ans:1},{q:'IoC stands for?',opts:['Input Output Control','Inversion of Control — Spring manages object creation','Internet of Code','Internal Object Cache'],ans:1},{q:'@Autowired on constructor is?',opts:['Required always','Optional if class has only one constructor (Spring 4.3+)','Not supported','Deprecated'],ans:1},{q:'@Service vs @Component?',opts:['@Service is faster','Functionally same — @Service is semantic, marks business layer','@Service has extra AOP support','Different scanning'],ans:1}]},
        { id:3, title:'Spring Data JPA — Entities & Repositories',
          video:{youtubeId:'8SGI_XS5OPw',title:'Spring Data JPA Tutorial',channel:'Amigoscode',duration:'1 hr 30 min',description:'JPA entities, repositories, derived queries, JPQL, relationships.'},
          content:{sections:[
            {heading:'🗺️ JPA Entity', code:'@Entity @Table(name="students")\\n@Data @NoArgsConstructor @AllArgsConstructor @Builder\\npublic class Student {\\n    @Id @GeneratedValue(strategy=GenerationType.IDENTITY)\\n    private Long id;\\n    @Column(nullable=false,length=100) private String name;\\n    @Column(unique=true,nullable=false) private String email;\\n    private Double gpa;\\n    @CreationTimestamp private LocalDateTime createdAt;\\n}'},
            {heading:'📦 Repository Methods',code:'@Repository\\npublic interface StudentRepo extends JpaRepository<Student,Long> {\\n    List<Student> findByDept(String dept);\\n    List<Student> findByGpaGreaterThan(Double min);\\n    Optional<Student> findByEmail(String email);\\n    boolean existsByEmail(String email);\\n\\n    @Query("SELECT s FROM Student s WHERE s.gpa > :min ORDER BY s.gpa DESC")\\n    List<Student> findTopStudents(@Param("min") Double min);\\n}'}
          ],
          practiceTask:{title:'Task — Course Entity & Repository',instructions:'Create Course entity (title, description, instructor, fee, maxStudents). Repository with: findByInstructor, findByFeeLessThan, custom JPQL for available courses. Test all in service + controller.',hint:'@GeneratedValue IDENTITY = auto-increment. Use @Column(precision=10,scale=2) for fee.'},
          resources:[{label:'Spring Data JPA Docs',url:'https://spring.io/projects/spring-data-jpa'},{label:'Amigoscode JPA',url:'https://www.youtube.com/watch?v=8SGI_XS5OPw'}]},
          quiz:[{q:'@Entity marks?',opts:['Service bean','Java class as JPA database table','Repository','Controller'],ans:1},{q:'JpaRepository.save() with existing id?',opts:['Error','Updates the record','Creates duplicate','Deletes then inserts'],ans:1},{q:'findByNameContaining generates?',opts:['Error','SELECT WHERE name LIKE %value%','SELECT WHERE name = value','Custom code needed'],ans:1},{q:'@OneToMany(fetch=LAZY)?',opts:['Loads immediately','Loads related data only when accessed','Never loads','Deletes related'],ans:1},{q:'@CreationTimestamp?',opts:['Manual date set','Auto-sets to current time on insert','Updates on every save','Timestamp index'],ans:1}]},
        { id:4, title:'REST API — CRUD with Validation',
          video:{youtubeId:'vtPkZShrvXQ',title:'REST API Spring Boot Complete',channel:'Amigoscode',duration:'2 hr',description:'Complete REST CRUD API with validation, DTOs, proper HTTP codes, exception handling.'},
          content:{sections:[
            {heading:'🌐 Full CRUD Controller',code:'@RestController @RequestMapping("/api/v1/students") @RequiredArgsConstructor\\npublic class StudentController {\\n    private final StudentService svc;\\n\\n    @GetMapping public ResponseEntity<Page<StudentDTO>> all(\\n            @RequestParam(defaultValue="0") int page,\\n            @RequestParam(defaultValue="10") int size) {\\n        return ResponseEntity.ok(svc.getAll(page,size));\\n    }\\n\\n    @GetMapping("/{id}") public ResponseEntity<StudentDTO> byId(@PathVariable Long id){\\n        return ResponseEntity.ok(svc.findById(id));\\n    }\\n\\n    @PostMapping public ResponseEntity<StudentDTO> create(@Valid @RequestBody CreateStudentReq req){\\n        StudentDTO dto = svc.create(req);\\n        return ResponseEntity.created(URI.create("/api/v1/students/"+dto.getId())).body(dto);\\n    }\\n\\n    @PutMapping("/{id}") public ResponseEntity<StudentDTO> update(\\n            @PathVariable Long id, @Valid @RequestBody UpdateStudentReq req){\\n        return ResponseEntity.ok(svc.update(id,req));\\n    }\\n\\n    @DeleteMapping("/{id}") public ResponseEntity<Void> delete(@PathVariable Long id){\\n        svc.delete(id); return ResponseEntity.noContent().build();\\n    }\\n}'},
            {heading:'✅ Validation & Global Exception Handler',code:'public record CreateStudentReq(\\n    @NotBlank String name,\\n    @Email @NotBlank String email,\\n    @Min(0) @Max(10) Double gpa\\n){}\\n\\n@RestControllerAdvice\\npublic class GlobalExceptionHandler {\\n    @ExceptionHandler(StudentNotFoundException.class)\\n    public ResponseEntity<ErrorResponse> notFound(StudentNotFoundException ex){\\n        return ResponseEntity.status(404).body(new ErrorResponse(ex.getMessage(),404));\\n    }\\n    @ExceptionHandler(MethodArgumentNotValidException.class)\\n    public ResponseEntity<ErrorResponse> validation(MethodArgumentNotValidException ex){\\n        String msg = ex.getBindingResult().getFieldErrors().stream()\\n            .map(fe -> fe.getField()+": "+fe.getDefaultMessage())\\n            .collect(Collectors.joining(", "));\\n        return ResponseEntity.badRequest().body(new ErrorResponse(msg,400));\\n    }\\n}'}
          ],
          practiceTask:{title:'Task — Full CRUD with Postman Tests',instructions:'Complete Student CRUD API with all 5 endpoints. Add DTOs, validation, GlobalExceptionHandler. Test in Postman: 200 on GET, 201 on POST, 204 on DELETE, 404 on bad id, 400 on invalid body.',hint:'Use records for DTOs (Java 16+). ResponseEntity.created() needs URI.create().' },
          resources:[{label:'Spring MVC Docs',url:'https://docs.spring.io/spring-framework/reference/web/webmvc.html'},{label:'Amigoscode REST',url:'https://www.youtube.com/watch?v=vtPkZShrvXQ'}]},
          quiz:[{q:'@PathVariable gets value from?',opts:['Query string','Request body','/students/{id} — URL path','Header'],ans:2},{q:'HTTP 201 Created means?',opts:['OK','New resource created','Not found','Bad request'],ans:1},{q:'@Valid triggers?',opts:['JWT validation','Bean Validation on @RequestBody','SQL validation','Token check'],ans:1},{q:'ResponseEntity.noContent().build() returns?',opts:['200 OK','201 Created','204 No Content','404 Not Found'],ans:2},{q:'@RestControllerAdvice handles exceptions?',opts:['Only one controller','Globally across all controllers','Only runtime exceptions','Only custom exceptions'],ans:1}]},
        { id:5, title:'Pagination, Sorting & Custom Queries',
          video:{youtubeId:'cF0Im4D1jIQ',title:'Spring Boot Pagination & Sorting',channel:'Daily Code Buffer',duration:'50 min',description:'Pageable, Page, Sort, custom query parameters, response with metadata.'},
          content:{sections:[
            {heading:'📄 Pagination with Spring Data',code:'// Repository\\nPage<Student> findByDept(String dept, Pageable pageable);\\n\\n// Service\\npublic Page<StudentDTO> getAll(int page, int size, String sortBy){\\n    Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy));\\n    return repo.findAll(pageable).map(this::toDTO);\\n}\\n\\n// Controller\\n@GetMapping\\npublic ResponseEntity<Page<StudentDTO>> all(\\n        @RequestParam(defaultValue="0") int page,\\n        @RequestParam(defaultValue="10") int size,\\n        @RequestParam(defaultValue="name") String sortBy){\\n    return ResponseEntity.ok(svc.getAll(page,size,sortBy));\\n}\\n// GET /api/students?page=0&size=5&sortBy=gpa'}
          ],
          practiceTask:{title:'Task — Paginated Student List',instructions:'Add pagination to GET /students. Return Page<StudentDTO> with totalElements, totalPages, currentPage. Add sort by name/gpa/createdAt. Test: page=0 size=3 sortBy=gpa.',hint:'Page<T> from Spring Data already includes metadata. Map to DTO with .map(mapper).'},
          resources:[{label:'Spring Data Pagination',url:'https://www.baeldung.com/spring-data-jpa-pagination-sorting'},{label:'Daily Code Buffer Pagination',url:'https://www.youtube.com/watch?v=cF0Im4D1jIQ'}]},
          quiz:[{q:'PageRequest.of(0,10) means?',opts:['Page 1, 10 items','Page 0 (first page), 10 items per page','Skip 10, take 10','Total 10 pages'],ans:1},{q:'Page<T>.getTotalElements()?',opts:['Items in current page','Total items across all pages','Total pages','Page size'],ans:1},{q:'Sort.by("gpa").descending() does?',opts:['Sorts by GPA ascending','Sorts by GPA descending (highest first)','Filters by GPA','Groups by GPA'],ans:1},{q:'Pageable in Spring Data repository accepts?',opts:['Only page number','Page, size, sort — all in one object','Only size','Only sort'],ans:1},{q:'Spring Data Slice vs Page?',opts:['Same thing','Page has total count (SQL COUNT); Slice just knows has next — more efficient','Slice is deprecated','Page is for lists only'],ans:1}]
        }
      ],
      weekQuiz:[
        {q:'@SpringBootApplication combines?',opts:['@Controller @Service @Repository','@Configuration @EnableAutoConfiguration @ComponentScan','@Entity @Table @Column','@RestController @RequestMapping @ResponseBody'],ans:1},
        {q:'Constructor injection preferred because?',opts:['Less typing','Explicit deps + final fields + testable','Spring requirement','Faster'],ans:1},
        {q:'spring.jpa.ddl-auto=update?',opts:['Drops recreates','Updates schema to match entities','Read only','Deletes data'],ans:1},
        {q:'findByEmailAndGpaGreaterThan generates?',opts:['Error','WHERE email=? AND gpa>?','WHERE email=? OR gpa>?','Custom needed'],ans:1},
        {q:'ResponseEntity purpose?',opts:['DB connection','Return body + HTTP status + headers together','Security filter','Request parsing'],ans:1},
        {q:'@Valid annotation needs?',opts:['Spring Web only','spring-boot-starter-validation','Spring Security','Spring Data'],ans:1},
        {q:'@RestControllerAdvice scope?',opts:['One controller','Global exception handling across all','Same package','Current thread'],ans:1},
        {q:'Page<T> vs List<T> in API?',opts:['Same','Page includes pagination metadata: total, pages, current','List is faster','Page deprecated'],ans:1},
        {q:'@Transactional on service method?',opts:['Adds caching','Wraps in DB transaction — auto commit/rollback','Adds logging','Security check'],ans:1},
        {q:'Spring Boot DevTools does?',opts:['Production optimization','Auto-restart on code change during dev','DB migration','Security config'],ans:1}
      ],
      miniProject:{title:'Internship Management API — Spring Boot',description:'Full REST API for managing students, courses, and enrollments.',requirements:['Entities: Student, Course, Enrollment (many-to-many)','Full CRUD REST for each entity','Validation on all request bodies','GlobalExceptionHandler with proper HTTP codes','Pagination and sorting on list endpoints','Custom JPQL queries','Postman collection with 15+ tested requests']}
    },
`;

fs.appendFileSync(target, weeks5to9);
console.log('Week 5 appended!');
