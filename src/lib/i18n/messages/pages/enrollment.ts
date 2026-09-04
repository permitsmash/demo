export const enrollmentEn = {
  title: "Enrollment",
  steps: {
    package: "Package Selection",
    student: "Student Information",
    payment: "Payment Selection",
  },
  ageRequirement:
    "The RMV requires all students to be at least 15 years, 9 months on the first day of class.",
  agePrompt:
    "Please enter your student's birth date to see a list of eligible classes.",
  minDeposit: "Min ${amount} deposit to start.",
  studentDob: "Student Date Of Birth",
  month: "Month",
  day: "Day",
  year: "Year",
  showClasses: "Show Available Classes",
  clear: "Clear",
  table: {
    location: "Location",
    startDate: "Start Date",
    endDate: "End Date",
    schedule: "Schedule",
    classNotes: "Class Notes",
    select: "Select",
  },
  selectClass: "Select",
  classSelected: "Selected",
  viewSchedule: "View Schedule",
  continue: "Continue",
  back: "Back",
  noPaste: "Please fill your information by typing, copy paste is not allowed.",
  studentInformation: "Student Information",
  orderSummary: "Order Summary",
  productName: "Product/Package Name",
  price: "Price",
  total: "Total",
  addonsTitle: "Optional add-ons",
  addons: {
    "rmv-area-2-watertown": {
      name: "RMV Area 2 – Watertown",
      description:
        "Road Test at Watertown RMV Weekdays only. The road test fee is non-refundable.",
    },
    "rmv-area-3-rmv-branch": {
      name: "RMV Area 3 – RMV Branch",
      description:
        "Road Test at Branch RMV Weekdays only. Branches: Haverhill, Lawrence, Lowell, and Milford. The road test fee is non-refundable.",
    },
    "comp-test-watertown": {
      name: "COMP Test – Watertown RMV",
      description:
        "COMP Test at Watertown RMV only. The road test fee is non-refundable.",
    },
    "rmv-area-1-jmc": {
      name: "RMV Area 1 – JMC Office",
      description:
        "Road Test at JMC Office Waltham Saturdays. The road test fee is non-refundable.",
    },
  },
  firstName: "First Name",
  lastName: "Last Name",
  city: "City",
  address: "Address",
  state: "State",
  zipCode: "Zip Code",
  homePhone: "Home Phone",
  cellPhone: "Cell Phone",
  email: "Email",
  dateOfBirth: "Date of Birth",
  gender: "Gender",
  male: "Male",
  female: "Female",
  highSchool: "High School (If applicable)",
  permitNumber: "Permit #",
  permitIssuedDate: "Permit Issued Date",
  parentName: "Parent1/Guardian Name",
  parentCell: "Parent/Guardian Cell #",
  parentEmail: "Parent/Guardian Email",
  pleaseSelect: "Please Select",
  required: "Required",
  payNow: "Pay Now",
  notEligible: "Student does not meet the minimum age requirement for this program.",
  selectClassFirst: "Please select a class session to continue.",
  selectProduct: "Select a program from the courses page to begin enrollment.",
  browsePrograms: "Browse Programs",
  selectedSession: "Selected session",
  scheduleTitle: "Class Schedule",
  scheduleTable: {
    number: "#",
    date: "Date",
    session: "Session",
    time: "Time",
    notes: "Notes",
    classDays: "{count} class days",
  },
  close: "Close",
} as const;

export type EnrollmentMessages = {
  [K in keyof typeof enrollmentEn]: (typeof enrollmentEn)[K] extends string
    ? string
    : (typeof enrollmentEn)[K] extends readonly string[]
      ? readonly string[]
      : K extends "addons"
        ? {
            [P in keyof (typeof enrollmentEn)["addons"]]: {
              name: string;
              description: string;
            };
          }
        : {
            [P in keyof (typeof enrollmentEn)[K]]: string;
          };
};

export const enrollmentEs: EnrollmentMessages = {
  title: "Inscripción",
  steps: {
    package: "Selección de paquete",
    student: "Información del estudiante",
    payment: "Selección de pago",
  },
  ageRequirement:
    "El RMV exige que todos los estudiantes tengan al menos 15 años y 9 meses el primer día de clase.",
  agePrompt:
    "Ingrese la fecha de nacimiento del estudiante para ver la lista de clases elegibles.",
  minDeposit: "Depósito mínimo de ${amount} para comenzar.",
  studentDob: "Fecha de nacimiento del estudiante",
  month: "Mes",
  day: "Día",
  year: "Año",
  showClasses: "Mostrar clases disponibles",
  clear: "Limpiar",
  table: {
    location: "Ubicación",
    startDate: "Fecha de inicio",
    endDate: "Fecha de fin",
    schedule: "Horario",
    classNotes: "Notas de clase",
    select: "Seleccionar",
  },
  selectClass: "Seleccionar",
  classSelected: "Seleccionado",
  viewSchedule: "Ver horario",
  continue: "Continuar",
  back: "Atrás",
  noPaste: "Complete su información escribiendo; no se permite copiar y pegar.",
  studentInformation: "Información del estudiante",
  orderSummary: "Resumen del pedido",
  productName: "Producto/Paquete",
  price: "Precio",
  total: "Total",
  addonsTitle: "Complementos opcionales",
  addons: {
    "rmv-area-2-watertown": {
      name: "RMV Área 2 – Watertown",
      description:
        "Examen práctico en el RMV de Watertown solo entre semana. La tarifa del examen práctico no es reembolsable.",
    },
    "rmv-area-3-rmv-branch": {
      name: "RMV Área 3 – Sucursal RMV",
      description:
        "Examen práctico en sucursal RMV solo entre semana. Sucursales: Haverhill, Lawrence, Lowell y Milford. La tarifa del examen práctico no es reembolsable.",
    },
    "comp-test-watertown": {
      name: "Examen COMP – RMV Watertown",
      description:
        "Examen COMP solo en el RMV de Watertown. La tarifa del examen práctico no es reembolsable.",
    },
    "rmv-area-1-jmc": {
      name: "RMV Área 1 – Oficina JMC",
      description:
        "Examen práctico en la oficina JMC de Waltham los sábados. La tarifa del examen práctico no es reembolsable.",
    },
  },
  firstName: "Nombre",
  lastName: "Apellido",
  city: "Ciudad",
  address: "Dirección",
  state: "Estado",
  zipCode: "Código postal",
  homePhone: "Teléfono de casa",
  cellPhone: "Teléfono celular",
  email: "Correo electrónico",
  dateOfBirth: "Fecha de nacimiento",
  gender: "Género",
  male: "Masculino",
  female: "Femenino",
  highSchool: "Escuela secundaria (si aplica)",
  permitNumber: "Permiso #",
  permitIssuedDate: "Fecha de emisión del permiso",
  parentName: "Nombre del padre/tutor",
  parentCell: "Celular del padre/tutor",
  parentEmail: "Correo del padre/tutor",
  pleaseSelect: "Seleccione",
  required: "Obligatorio",
  payNow: "Pagar ahora",
  notEligible: "El estudiante no cumple el requisito mínimo de edad para este programa.",
  selectClassFirst: "Seleccione una sesión de clase para continuar.",
  selectProduct: "Seleccione un programa en la página de cursos para comenzar la inscripción.",
  browsePrograms: "Ver programas",
  selectedSession: "Sesión seleccionada",
  scheduleTitle: "Horario de clase",
  scheduleTable: {
    number: "#",
    date: "Fecha",
    session: "Sesión",
    time: "Hora",
    notes: "Notas",
    classDays: "{count} días de clase",
  },
  close: "Cerrar",
};

export const enrollmentPt: EnrollmentMessages = {
  title: "Inscrição",
  steps: {
    package: "Seleção de pacote",
    student: "Informações do aluno",
    payment: "Seleção de pagamento",
  },
  ageRequirement:
    "O RMV exige que todos os alunos tenham pelo menos 15 anos e 9 meses no primeiro dia de aula.",
  agePrompt:
    "Digite a data de nascimento do aluno para ver a lista de aulas elegíveis.",
  minDeposit: "Depósito mínimo de ${amount} para começar.",
  studentDob: "Data de nascimento do aluno",
  month: "Mês",
  day: "Dia",
  year: "Ano",
  showClasses: "Mostrar aulas disponíveis",
  clear: "Limpar",
  table: {
    location: "Localização",
    startDate: "Data de início",
    endDate: "Data de término",
    schedule: "Horário",
    classNotes: "Notas da aula",
    select: "Selecionar",
  },
  selectClass: "Selecionar",
  classSelected: "Selecionado",
  viewSchedule: "Ver horário",
  continue: "Continuar",
  back: "Voltar",
  noPaste: "Preencha suas informações digitando; copiar e colar não é permitido.",
  studentInformation: "Informações do aluno",
  orderSummary: "Resumo do pedido",
  productName: "Produto/Pacote",
  price: "Preço",
  total: "Total",
  addonsTitle: "Complementos opcionais",
  addons: {
    "rmv-area-2-watertown": {
      name: "RMV Área 2 – Watertown",
      description:
        "Teste prático no RMV de Watertown apenas em dias úteis. A taxa do teste prático não é reembolsável.",
    },
    "rmv-area-3-rmv-branch": {
      name: "RMV Área 3 – Filial RMV",
      description:
        "Teste prático em filial RMV apenas em dias úteis. Filiais: Haverhill, Lawrence, Lowell e Milford. A taxa do teste prático não é reembolsável.",
    },
    "comp-test-watertown": {
      name: "Teste COMP – RMV Watertown",
      description:
        "Teste COMP apenas no RMV de Watertown. A taxa do teste prático não é reembolsável.",
    },
    "rmv-area-1-jmc": {
      name: "RMV Área 1 – Escritório JMC",
      description:
        "Teste prático no escritório JMC em Waltham aos sábados. A taxa do teste prático não é reembolsável.",
    },
  },
  firstName: "Nome",
  lastName: "Sobrenome",
  city: "Cidade",
  address: "Endereço",
  state: "Estado",
  zipCode: "CEP",
  homePhone: "Telefone residencial",
  cellPhone: "Celular",
  email: "E-mail",
  dateOfBirth: "Data de nascimento",
  gender: "Gênero",
  male: "Masculino",
  female: "Feminino",
  highSchool: "Ensino médio (se aplicável)",
  permitNumber: "Permissão #",
  permitIssuedDate: "Data de emissão da permissão",
  parentName: "Nome do pai/responsável",
  parentCell: "Celular do pai/responsável",
  parentEmail: "E-mail do pai/responsável",
  pleaseSelect: "Selecione",
  required: "Obrigatório",
  payNow: "Pagar agora",
  notEligible: "O aluno não atende ao requisito mínimo de idade para este programa.",
  selectClassFirst: "Selecione uma sessão de aula para continuar.",
  selectProduct: "Selecione um programa na página de cursos para iniciar a inscrição.",
  browsePrograms: "Ver programas",
  selectedSession: "Sessão selecionada",
  scheduleTitle: "Horário da aula",
  scheduleTable: {
    number: "#",
    date: "Data",
    session: "Sessão",
    time: "Horário",
    notes: "Notas",
    classDays: "{count} dias de aula",
  },
  close: "Fechar",
};

export const enrollmentHt: EnrollmentMessages = {
  title: "Enskripsyon",
  steps: {
    package: "Chwa Pakè",
    student: "Enfòmasyon Elèv",
    payment: "Chwa Peman",
  },
  ageRequirement:
    "RMV egije tout elèv yo gen omwen 15 ane ak 9 mwa premye jou klas la.",
  agePrompt:
    "Tanpri antre dat nesans elèv la pou w wè lis klas ki kalifye yo.",
  minDeposit: "Depo minimòm ${amount} pou kòmanse.",
  studentDob: "Dat Nesans Elèv la",
  month: "Mwa",
  day: "Jou",
  year: "Ane",
  showClasses: "Montre Klas Disponib yo",
  clear: "Efase",
  table: {
    location: "Kote",
    startDate: "Dat Kòmansman",
    endDate: "Dat Fen",
    schedule: "Orè",
    classNotes: "Nòt Klas",
    select: "Chwazi",
  },
  selectClass: "Chwazi",
  classSelected: "Seleksyone",
  viewSchedule: "Gade Orè",
  continue: "Kontinye",
  back: "Retounen",
  noPaste: "Tanpri ranpli enfòmasyon ou an ekri; kopye/kole pa pèmèt.",
  studentInformation: "Enfòmasyon Elèv",
  orderSummary: "Rezime Kòmand",
  productName: "Pwodui/Pakè",
  price: "Pri",
  total: "Total",
  addonsTitle: "Opsyon siplemantè",
  addons: {
    "rmv-area-2-watertown": {
      name: "RMV Zòn 2 – Watertown",
      description:
        "Tès wout nan RMV Watertown jou ouvrab sèlman. Frè tès wout la pa ranbousab.",
    },
    "rmv-area-3-rmv-branch": {
      name: "RMV Zòn 3 – Branch RMV",
      description:
        "Tès wout nan branch RMV jou ouvrab sèlman. Branch yo: Haverhill, Lawrence, Lowell, ak Milford. Frè tès wout la pa ranbousab.",
    },
    "comp-test-watertown": {
      name: "Tès COMP – RMV Watertown",
      description:
        "Tès COMP nan RMV Watertown sèlman. Frè tès wout la pa ranbousab.",
    },
    "rmv-area-1-jmc": {
      name: "RMV Zòn 1 – Biwo JMC",
      description:
        "Tès wout nan biwo JMC Waltham samdi yo. Frè tès wout la pa ranbousab.",
    },
  },
  firstName: "Non",
  lastName: "Siyati",
  city: "Vil",
  address: "Adrès",
  state: "Eta",
  zipCode: "Kòd Postal",
  homePhone: "Telefòn Kay",
  cellPhone: "Telefòn Selilè",
  email: "Imèl",
  dateOfBirth: "Dat Nesans",
  gender: "Sèks",
  male: "Gason",
  female: "Fi",
  highSchool: "Lekòl Segondè (si aplikab)",
  permitNumber: "Pèmi #",
  permitIssuedDate: "Dat Pèmi a Bay",
  parentName: "Non Paran/Gadyen",
  parentCell: "Selilè Paran/Gadyen",
  parentEmail: "Imèl Paran/Gadyen",
  pleaseSelect: "Chwazi",
  required: "Obligatwa",
  payNow: "Peye Kounye a",
  notEligible: "Elèv la pa satisfè kondisyon laj minimòm pou pwogram sa a.",
  selectClassFirst: "Tanpri chwazi yon sesyon klas pou kontinye.",
  selectProduct: "Chwazi yon pwogram sou paj kou yo pou kòmanse enskripsyon an.",
  browsePrograms: "Gade Pwogram yo",
  selectedSession: "Sesyon chwazi",
  scheduleTitle: "Orè Klas",
  scheduleTable: {
    number: "#",
    date: "Dat",
    session: "Sesyon",
    time: "Lè",
    notes: "Nòt",
    classDays: "{count} jou klas",
  },
  close: "Fèmen",
};
