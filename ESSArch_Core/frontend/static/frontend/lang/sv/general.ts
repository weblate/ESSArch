/*@ngInject*/
export default ($translateProvider: ng.translate.ITranslateProvider) => {
  $translateProvider.translations('sv', {
    ACCESSIP: 'Förvaringsenheter',
    ACCESSAID: 'Sökingångar',
    ADD_ATTRIBUTE: 'Lägg till Attribut',
    ADD_EXTENSION: 'Lägg till tillägg',
    ADD: 'Lägg till',
    ADDRESS: 'Adress',
    ADMINISTRATION: 'Administration',
    AGENT: 'Agent',
    AGENTS: 'Agenter',
    AIC_DESC: 'AIC för IP',
    ALL: 'Alla',
    ALLOW_UNKNOWN_FILES: 'Tillåt okända filer',
    APPLY: 'Applicera',
    APPLYCHANGES: 'Spara ändringar',
    APPLYFILTERS: 'Applicera filter',
    APPRAISAL_DATE_DESC: 'Gallringsfrist',
    APPRAISAL_DATE: 'Gallringsfrist',
    APPRAISAL: 'Gallring',
    APPROVAL: 'Godkännande',
    ARCHIVAL_DESCRIPTIONS: 'Arkivredovisning',
    ARCHIVAL_LOCATION: 'Arkivplats',
    ARCHIVAL_STORAGE: 'Archival storage',
    ARCHIVAL_TYPE: 'Arkivtyp',
    ARCHIVECREATORS: 'Arkivbildare',
    ARCHIVALINSTITUTION: 'Arkivinstitution',
    ARCHIVALLOCATION: 'Arkivplats',
    ARCHIVALTYPE: 'Arkivtyp',
    ARCHIVE_POLICY: 'Arkivpolicy',
    ARCHIVED: 'Bevarad',
    ARCHIVISTORGANIZATION: 'Arkivorganisation',
    AVAILABLE: 'Tillgänglig',
    BLOCKSIZE: 'Blockstorlek',
    CACHED: 'Cachad',
    CANCEL: 'Avbryt',
    CANCELPRESERVATION: 'Stäng arkivering',
    CANNOT_RECEIVE_ERROR: 'Ogiltig leveransöverenskommelse i XML-fil',
    CHANGE_PASSWORD: 'Ändra lösenord',
    CHANGED: 'Ändrad',
    CHECKPOINT: 'Kontrollstation',
    CHOOSELANGUAGE: 'Välj språk',
    CITY: 'Stad',
    CLEAR_ALL: 'Avmarkera alla',
    CLEAR: 'Rensa',
    CLOSE: 'Stäng',
    COLLAPSE_ALL: 'Kollapsa alla',
    COLLECTCONTENT: 'Samla innehåll',
    COLUMN: 'Kolumn',
    COMMENT: 'Kommentar',
    COMPLETED_UPLOAD_DESC: 'Vill du slutföra uppladdning för IP(n)?',
    CONSIGN_METHOD: 'Utlämnandemetod',
    CONTENTLOCATION: 'Innehållsplacering',
    CONTENT: 'Innehåll',
    CONVERSION: 'Åtgärd',
    CONVERSIONS: 'Åtgärder',
    CONVERTFILES: 'Konvertera filer',
    COPYID: 'Kopiera',
    COPYPATH: 'Kopiera sökväg',
    COULD_NOT_LOAD_PATH: 'Kunde inte ladda sökväg!',
    CREATE_DELIVERY: 'Skapa leverans',
    CREATE_DELIVERY_DESC: 'Vill du skapa en leverans?',
    CREATE_SIP_DESC: 'Vill du skapa SIP(ar) av IP(n)?',
    CREATE_SIP: 'Skapa SIP',
    CREATE_TEMPLATE: 'Skapa template',
    CREATE_NEW_GENERATION: 'Skapa ny generation',
    CREATE: 'Skapa',
    CREATED: 'Skapad',
    CREATEDIP: 'Skapa utlämnande',
    CREATE_DIP_DESC: 'Vill du skapa utlämnandepaket?',
    CREATESIP: 'Skapa SIP',
    CURRENTMEDIUMID: 'nuvarande media-ID',
    CURRENTMEDIUMPREFIX: 'Nuvarande medie-prefix',
    CUSTOM_IDENTIFICATION: 'Egen identifiering',
    DASHBOARD: 'Dashboard',
    DATABASE: 'Databas',
    DATE: 'Datum',
    DATES: 'Datum',
    DAY: 'Dag',
    DEACTIVATE: 'Deaktivera',
    DEACTIVATABLE: 'Kan deaktiveras',
    DEACTIVATEMEDIA: 'Deaktivera media',
    DEACTIVATE_STORAGE_MEDIUMS: 'Deaktivera lagringsmedia',
    DELETE: 'Radera',
    DELIVERY: 'Leverans',
    DELIVERIES: 'Accessioner',
    DESC: 'Beskrivning',
    DESCRIPTION: 'Beskrivning',
    DESELECTALL: 'Avvälj alla',
    DEVICE: 'Enhet',
    DIFFCHECK: 'Validera',
    DIR_EXISTS_IN_DIP_DESC:
      'Det existerar redan en mapp med detta namn i utlämnandet. Vill du skriva över den nuvarande mappen?',
    DIR_EXISTS_IN_DIP: 'Det existerar redan en mapp med samma namn!',
    DIR_EXISTS_IN_IP_DESC:
      'Det existerar redan en mapp med detta namn i IPt. Vill du skriva över den nuvarande mappen?',
    DIR_EXISTS_IN_IP: 'Det existerar redan en mapp med samma namn!',
    DISSEMINATION_PACKAGES: 'Utlämnandepaket',
    DISSEMINATION: 'Utlämnande',
    DO_YOU_WANT_TO_REMOVE_ORDER: 'Vill du ta bort beställning',
    DO_YOU_WANT_TO_REMOVE_TEMPLATE: 'Vill du ta bort template?',
    DO_YOU_WANT_TO_DOWNLOAD_DIP: 'Vill du ladda ner utlämnande?',
    DO_YOU_WANT_TO_DOWNLOAD_ORDER: 'Vill du ladda ner beställning?',
    DOWNLOAD: 'Ladda ner',
    DOCS: 'Dokumentation',
    DONE: 'Färdig',
    DOYOUWANTTOLOCKSA: 'Vill du låsa sa',
    DOYOUWANTTOREMOVEIP: 'Vill du ta bort IP?',
    DO_YOU_WANT_TO_REMOVE_IP_WORKAREA: 'Vill du ta bort IP från arbetsytan?',
    EDIT: 'Redigera',
    EDIT_ORDER: 'Redigera beställning',
    EMAILS_FAILED: 'Email misslyckades',
    EMAILS_SENT: 'Email skickades',
    EMPTY: 'Tomt',
    ENABLED: 'Aktiverad',
    ENABLEDDESC: 'Profilen är aktiverad om den är checkad',
    END: 'Slut',
    ENTERORDERLABEL: 'Ange etikett för beställning',
    ENTERPROFILENAME: 'Välj nytt profilnamn',
    ENTER_VALID_COORDINATE_VALUE: 'Ange ett korrekt koordinatvärde. Exempel: 40.785091',
    ENTERSAPROFILENAME: 'Välj nytt SA-profilnamn',
    ENTITY: 'Entitet',
    ENTITYDESC: 'Profiltyp',
    EXPAND_ALL: 'Expandera alla',
    EXPORT_ACTION: 'Exportera',
    EXPORT_COPY: 'Exportera kopia',
    EXPORT_RESULT: 'Exportera resultat',
    EXPORTPATH: 'Export sökväg',
    EXPORTED_SUCCESSFULLY: 'Export lyckades',
    FAILED: 'Misslyckade',
    FAILURE: 'Fel',
    FAMILY_NAME: 'Efternamn',
    FILE_EXISTS_IN_DIP_DESC:
      'Det existerar redan en fil med detta namn i utlämnandet. Vill du skriva över den nuvarande filen?',
    FILE_EXISTS_IN_DIP: 'Det existerar redan en fil med samma namn!',
    FILE_EXISTS_IN_IP_DESC:
      'Det existerar redan en fil med detta namn i IPt. Vill du skriva över den nuvarande filen?',
    FILE_EXISTS_IN_IP: 'Det existerar redan en fil med samma namn!',
    FILE: 'Fil',
    FILECONVERSION: 'Filkonvertering',
    FILENAME: 'Filnamn',
    FILES_PER_PAGE: 'Filer per sida',
    FILTER: 'Filter',
    FILTERBY: 'Filtrera på',
    FILTERS: 'Filter',
    FIRST_NAME: 'Förnamn',
    FORCECOPIES: 'Tvinga ytterligare kopior på samma mål-media',
    FORCE_WRITE_MIGRATED: 'Tillåt duplicerade lagringsposter',
    FORMAT_CONVERSION: 'Formatkonvertering',
    FORMAT: 'Format',
    FROM: 'från',
    GENERATE_TEMPLATE: 'Generera template',
    GET_AS_CONTAINER: 'Hämta som container',
    GET_AS_NEW_GENERATION: 'Hämta som ny generation',
    GET: 'Hämta',
    GET_AS_READ_ONLY: 'Hämta i läsläge',
    GET_AS_EDITABLE: 'Hämta i redigeringsläge',
    GLOBALSEARCH: 'sök ...',
    GLOBALSEARCHDESC_ARCHIVE_CREATORS: 'Lista alla arkivbildare som associeras med söktermen',
    GLOBALSEARCHDESC_ARCHIVES: 'Lista alla arkiv som associeras med söktermen',
    GLOBALSEARCHDESC_IP: 'Lista alla IPn som associeras med söktermen',
    GLOBALSEARCHDESC_MEDIUM_CONTENT: 'Lista allt innehåll i lagringsmedium som associeras med söktermen',
    GLOBALSEARCHDESC_MEDIUM: 'Lista alla lagringsmedium som associeras med söktermen',
    GLOBALSEARCHDESC_MIGRATION: 'Lista alla migreringar som associeras med söktermen',
    GLOBALSEARCHDESC_ORDER: 'Lista alla beställningar som associeras med söktermen',
    GLOBALSEARCHDESC_QUEUE: 'Lista alla kö-objekt som associeras med söktermen',
    GLOBALSEARCHDESC_ROBOT: 'Lista alla robotar som associeras med söktermen',
    GLOBALSEARCHDESC_STRUCTURES: 'Lista alla klassificeringsstrukturer som associeras med söktermen',
    GLOBALSEARCHDESC_TAPE_DRIVE: 'Lista alla bandenheter som associeras med söktermen',
    GLOBALSEARCHDESC_TAPE_SLOT: 'Lista alla bandplatser som associeras med söktermen',
    GLOBALSEARCHDESC_TEMPLATE: 'Lista alla mallar som associeras med söktermen',
    GLOBALSEARCHDESC_VALIDATION: 'Lista alla valideringar som associeras med söktermen',
    GRID_VIEW: 'Rutnät',
    HELP: 'Hjälp',
    ID: 'ID',
    IDENTIFICATION: 'Identifikation',
    IDENTIFICATION_CAN_NOT_CONTAIN_DESC: 'Identifierare får inte innehålla /, :, *, ?, ", <, > eller |',
    INCLUDE_AIC_XML: 'Inkludera AIC XML',
    INCLUDE_EXPORTABLE_IPS: 'Inkludera exporterbara objekt',
    INCLUDE_MISSING_STORAGE: 'Inkludera saknade lagringsobjekt',
    INCLUDE_INACTIVE_IPS: 'Inkludera inaktiverade informationspaket',
    INCLUDE_PACKAGE_XML: 'Inkludera package XML',
    INCLUDEDPROFILES: 'Inkluderade profiler',
    INFO: 'Info',
    INFOPAGE: 'Infosida',
    INFORMATION_CLASS: 'Informationsklass',
    INFORMATION_PACKAGE: 'Informationspaket',
    INFORMATION_PACKAGE_INFORMATION: 'Paketinformation',
    INFORMATION_PACKAGES: 'Informationspaket',
    INGEST: 'Mottagande',
    INITIATE: 'Påbörja',
    INPROGRESS: 'Evalueras',
    INVALID_SUBMISSION_AGREEMENT: 'Ogiltig leveransöverenskommelse',
    INVENTORY: 'Inventera',
    INVENTORYROBOTS: 'Inventera robot',
    IOQUEUE: 'IO-kö',
    IP_DELETE: "IP'n som kommer at tas bort",
    IP_EXISTS: 'IP med object identifer value "{{ip}}" finns redan',
    IP_GENERATION: 'IP-generation: {{generation}}',
    IP_REMOVED: 'IP {{label}} raderat!',
    IP_VIEW_TYPE: 'IP-visualisering',
    IPAPPROVAL: 'Godkännande',
    ITEMSPERPAGE: 'Objekt per sida',
    LABEL: 'Etikett',
    LANGUAGE: 'Språk',
    LEVEL: 'Nivå',
    LIST_VIEW: 'Lista',
    LOADING: 'Laddar',
    LOCATION: 'Placering',
    LOCATIONSTATUS: 'Placeringsstatus',
    LOCK_ERROR: 'kunde inte låsas',
    LOCK: 'Lås',
    LOCK_SA_TO_DELIVERY: 'Lås leveransöverenskommelse till leverans',
    LOCK_SA_TO_IP: 'Lås leveransöverenskommelse till informationspaket',
    LOCKED: 'Låst',
    LOCKPROFILE: 'Lås profil',
    LOCKSA: 'Lås SA',
    LOGIN: 'Logga in',
    LOGOUT: 'Logga ut',
    LONGTERM_ARCHIVAL_STORAGE: 'Long-term archival storage',
    MANAGE: 'Hantera',
    MANAGEMENT: 'Ledning',
    MANAGE_DELIVERY: 'Hantera leverans',
    MAPSTRUCTURE: 'Mappstruktur',
    MARKFORRECEIVE: 'Markera för mottagande',
    MATCH_ERROR: 'Information_class i archive policy matchar inte information_class i ip: ',
    MAXCAPACITY: 'Maxkapacitet',
    MEDIA_MIGRATION: 'Mediamigrering',
    MEDIAINFORMATION: 'Mediainformation',
    MEDIUM: 'Medium',
    MEDIUM_RANGE_ENABLED: 'Ange spann för medium ID',
    MEDIUMCONTENT: 'Mediuminnehåll',
    MEDIUMID: 'Medium ID',
    MEDIUMID_MAX: 'Medium ID till',
    MEDIUMID_MIN: 'Medium ID från',
    MEDIUMPREFIX: 'Media-prefix',
    MEDIUMSTATUS: 'Medium status',
    MESSAGE: 'Meddelande',
    METADATA: 'Metadata',
    MIGRATABLE: 'Migreringsbar',
    MIGRATE: 'Migrera',
    MIGRATE_ALL_METHODS: 'Migrera till lagringsmetoder',
    MIGRATION_TASKS: 'Migreringsjobb',
    MINUTE: 'Minut',
    MISSING_AIC_DESCRIPTION: 'AIC Description-profil saknas i leveransöverenskommelse',
    MISSING_AIP_DESCRIPTION: 'AIP Description-profil saknas i leveransöverenskommelse',
    MISSING_AIP: 'AIP-profil saknas i leveransöverenskommelse',
    MISSING_DIP: 'DIP-profil saknas i leveransöverenskommelse',
    MONTH: 'Månad',
    MOUNT: 'Montera',
    MOVE_TO_APPROVAL: 'Flytta till Godkännande',
    MOVE_TO_INGEST_APPROVAL: 'Flytta till Mottagande/Kontrollstation',
    MOVE_TO_INGEST_CHECKPOINT: 'Flytta till Mottagande/Kontrollstation',
    MY_PAGE: 'Mina sidor',
    MYPAGE: 'Mina sidor',
    NAME: 'Namn',
    NAVIGATETO: 'Navigera till',
    NEEDTOMIGRATE: 'Behöver migreras',
    NEWORDER: 'Ny beställning',
    NEWPASSWORD: 'Nytt Lösenord',
    NO_ACTIONS_FOR_SELECTED_IPS: 'Det finns inga tillgängliga funktioner för valda objekt',
    NO_ARGUMENTS: 'Inga argument',
    NO_AUTHORIZED_NAME_TYPE: 'Auktoriserad namntyp saknas',
    NO_PARAMETERS: 'Inga parametrar',
    NO_RESPONSE_FROM_SERVER: 'Inget svar från servern',
    NO_RESULTS_FOUND: 'Inga resultat hittade',
    NO_SUBMISSION_AGREEMENT_AVAILABLE: 'Inga leveransöverenskommelser tillgängliga',
    NO: 'Nej',
    NOTES: 'Anteckningar',
    NUMBEROFMOUNTS: 'Antal monteringar',
    OBJECT: 'Objekt',
    OBJECTID: 'Objekt-ID',
    OBJECTIDENTIFIERVALUE: 'Object identifier value',
    OFFLINE: 'Inaktiv',
    OK: 'Ok',
    OLDPASSWORD: 'Gammalt Lösenord',
    ONLINE: 'Aktiv',
    OPTIONS: 'Alternativ',
    OR: 'Eller',
    ORDER: 'Beställning',
    ORDER_CONTENT: 'Innehållsbeskrivning',
    ORDERS: 'Beställningar',
    OTHER: 'Andra',
    OUTCOME: 'Resultat',
    OVERVIEW: 'Översikt',
    PACKAGE_TYPE_NAME_EXCLUDE: 'Exkludera paket-typ',
    PACKAGE_TYPE: 'Pakettyp',
    PACKAGE: 'Paket',
    PACKAGEDEPENDENCIES: 'Paketberoenden',
    PACKAGEINFORMATION: 'Paketinformation',
    PAGE_DOES_NOT_EXIST: 'Sidan finns inte',
    PARAMETERS: 'Parametrar',
    PASSWORD: 'Lösenord',
    PATH: 'Sökväg',
    PENDING: 'Väntar',
    PERSONAL_NUMBER: 'Personnummer',
    PHONE: 'Telefonnummer',
    PLATFORM: 'Plattform',
    POLICY: 'Policy',
    POLICYID: 'Policy-ID',
    POLICYSTATUS: 'Policy-status',
    POSTAL_CODE: 'Postkod',
    POSTED: 'Inlagt',
    PREPARE_CONTENT: 'Förbered innehåll',
    PREPARE_DELIVERY: 'Förbered leverans',
    PREPARE_DELIVERY_DESC: 'Har du förberett leveransen?',
    PREPARE_FOR_NEW_DELIVERY: 'Förbered ny leverans',
    PREPARE_IP_DESC: 'Vill du förbereda IP(n) för uppladdning?',
    PREPARE_IP: 'Förbered IP',
    PREPARE_NEW_DELIVERY: 'Ny leverans',
    PREPARE_NEW_IP: 'Förbered nytt IP',
    PREPARE: 'Förbered',
    PREPARED: 'Förberedd',
    PREPAREDIP: 'Förbered utlämnande',
    PREPAREDIPDESC: 'Förbered nytt utlämnande',
    PREPAREIP: 'Förbered IP',
    PREPAREIPDESC: 'Gör ett nytt IP',
    PREPARESIP: 'Förbered SIP',
    PREPARING: 'Förbereder',
    PRESERVE: 'Bevara',
    PRESS_ESCAPE_TO_CLOSE: 'Tryck på ESC för att stänga',
    PREVIEW: 'Förhandsgranska',
    PREVIEW_MIGRATION: 'Förhandsgranska lagringsmigrering',
    PREVIEW_MIGRATION_DESC:
      'Klicka på ett informationspaket för att se vilka lagringsplatser det kommer migreras till',
    PREVIOUSMEDIUMPREFIX: 'Föregående medie-prefix',
    PROCESS: 'Bearbeta',
    PROCESS_AS_EDITABLE: 'Flytta till arbetsyta för bearbetning',
    PROCESS_AS_CONTAINER: 'Bearbeta som en "container"',
    PROCESS_AS_NEW_GENERATION: 'Skapa ny generation i arbetsyta',
    PROCESS_AS_READ_ONLY: 'Hämta läskopia till arbetsyta',
    PRODUCER: 'Producent',
    PROFILE: 'Profil',
    PROFILEDESC: 'Välj profil',
    PROFILEMAKER: 'Profile maker',
    PROFILEMANAGER: 'Profilhanterare',
    PROGRESS: 'Pågår',
    PUBLIC: 'Publik',
    PUBLISH: 'Publicera',
    PURPOSE: 'Syfte',
    QUEUES: 'Köer',
    QUARANTINE: 'Karantän',
    READ_ONLY: 'Endast läsbar',
    RECEIVE_DELIVERY: 'Ta emot leverans',
    RECEIVE_DELIVERIES: 'Ta emot leveranser',
    RECEIVE_SIP_DESC: 'Vill du ta emot SIP {{object_identifier_value}}?',
    RECEIVE_SIP: 'Ta emot SIP',
    RECEIVE: 'Ta emot',
    RECEIVED: 'Mottagen',
    RECEIVE_INFORMATION_PACKAGE: 'Ta emot informationspaket',
    RECEIVE_INFORMATION_PACKAGES: 'Ta emot informationspaket',
    RECEIVESIP: 'Ta emot SIP',
    RECEIVING: 'Tar emot',
    RECEPTION: 'Reception',
    REDO: 'Gör om',
    REFRESH: 'Uppdatera',
    REFRESHPAGE: 'Uppdatera sida',
    REFRESHTABLEDESC: 'Uppdatera tabell',
    REMOVE: 'Ta bort',
    REPEATPASSWORD: 'Repetera Lösenord',
    REQUEST: 'Förfrågan',
    REQUESTAPPROVED: 'Förfrågan godkänd',
    REQUESTTYPE: 'Förfrågan',
    RESPONSIBLE: 'Ansvarig',
    RESTRICTEDVIEW: 'Du har inte behörighet att se denna vy.',
    RESULT: 'Resultat',
    RETRIEVE: 'Hämta',
    RETRIEVE_AS_CONTAINER: 'Hämta som container till arbetsyta',
    RETRIEVE_AS_NEW_GENERATION: 'Hämta som ny generation',
    RETRIEVE_AS_UNPACKED: 'Hämta som uppackad till arbetsyta',
    RETRY: 'Försök igen',
    REVOKE: 'Stoppa',
    REVOKED: 'Stoppad',
    ROBOTINFORMATION: 'Robotinformation',
    ROBOTQUEUE: 'Robotkö',
    ROOT: 'rot',
    RULES_SAVED: 'Regler sparade',
    SA_PUBLISHED: 'Leveransöverenskommelse: {{name}} har publicerats',
    SAEDITOR: 'Leveransöverenskommelser',
    SAVE_ERROR: 'Ett fel uppstod!',
    SAVE: 'Spara',
    SAVE_ADD_ANOTHER: 'Spara och lägg till ny',
    SAVED_MESSAGE: 'Sparad!',
    SAVESAPROFILE: 'Spara SA-profil',
    SEARCH_ADMIN: 'Sök',
    SEARCH_ADMINISTRATION: 'Administration för sökvyer',
    SEARCH: 'Sök',
    SEE_ALL: 'Se alla',
    SEE_MORE_INFO_ABOUT_PAGE: 'Se mer information om denna sida',
    SEE_MY_IPS: 'Se egna informationspaket',
    SEE_MY_PROCSESS: 'Se egna jobb',
    SELECT: 'Välj',
    SEETRACEBACK: 'Se traceback',
    SELECT_ALL: 'Markera alla',
    SELECT_ORDERS: 'Välj beställningar ..',
    SELECT_TAGS: 'Välj taggar ...',
    SELECTALL: 'Välj alla',
    SELECTED: 'Vald(a)',
    SELECTIONLIST: 'Selection list',
    SELECTONE: 'Välj en',
    SETTINGS_SAVED: 'Inställningar sparade',
    SETTINGS: 'Inställningar',
    SHOW_RELEATED_IPS: 'Visa relaterade informationspaket',
    SIZE: 'Storlek',
    SKIP: 'Hoppa över',
    SSO: 'SSO',
    START: 'Start',
    STARTED: 'Startade',
    STARTMIGRATION: 'Starta migrering',
    STATE: 'Tillstånd',
    STATEDESC: 'profiltillstånd',
    STATUS: 'Status',
    STEP: 'Steg',
    STORAGE_MEDIUMS: 'Lagringsmedier',
    STORAGE_METHOD: 'Lagringsmetod',
    STORAGE_METHODS: 'Lagringsmetoder',
    STORAGE_POLICY: 'Lagringspolicy',
    STORAGE_STATUS_DESC: 'Lagringsstatus, Archival storage eller Long-term archival storage',
    STORAGE_STATUS: 'Lagringsstatus',
    STORAGE_TARGET: 'Lagringsplats',
    STORAGE_UNIT: 'Förvaringsenhet',
    STORAGE_UNITS: 'Förvaringsenheter',
    STORAGE: 'Lagring',
    STORAGEMAINTENANCE: 'Lagringsunderhåll',
    STORAGEMEDIUM: 'Lagringsmedium',
    STORAGEMIGRATION: 'Lagringsmigrering',
    STORAGETARGET: 'Destination',
    SUBMISSION_AGREEMENT: 'Leveransöverenskommelse',
    SUBMISSIONAGREEMENT: 'Leveransöverenskommelse',
    SUBMIT_SIP_DESC: 'Vill du skicka SIP(ar)?',
    SUBMIT: 'Skicka',
    SUBMIT_DELIVERY: 'Skicka leverans',
    SUBMIT_DELIVERY_DESC: 'Vill du skicka leveransen?',
    SUBMITDESCRIPTION: 'Leveransbeskrivning',
    SUBMITSIP: 'Skicka SIP',
    SUBMITTING: 'Skickar',
    SUBMITTED: 'Skickad',
    SUCCESS: 'Slutförd',
    SUPPORT: 'Support',
    SYSTEM: 'System',
    TAGS: 'Taggar',
    TAPEDRIVES: 'Bandenheter',
    TAPELIBRARY: 'Bandbibliotek',
    TAPESLOTS: 'Bandplatser',
    TAPESLOTSTATUS: 'Bandplats status',
    TARGET_NAME: 'Target name',
    TARGET: 'Mål',
    TARGETNAME: 'Målnamn',
    TARGETVALUE: 'Målvärde',
    TASKS: 'Jobb',
    TEMPPATH: 'Temporär sökväg',
    TIME: 'Tid',
    TIMER: 'Timer',
    TOACCESS: 'för att få tillgång.',
    TOIP: 'till IP',
    TRACEBACK: 'Traceback',
    TRANSFER: 'Överför',
    TRANSFER_SIP: 'Överför SIP',
    TRANSFERRED: 'Överförd',
    TRANSFERRING: 'Överför',
    TYPE: 'Typ',
    UNAVAILABLE: 'Inte tillgänglig',
    UNDO: 'Ångra',
    UNLOCKPROFILE: 'Lås upp profil',
    UNLOCKPROFILEINFO:
      'Om du låser upp denna profil kommer IPt att flyttas till "Förbered IP"-vyn. Fortsätt genom att klicka OK.',
    UNMOUNT_FORCE: 'Avmontera(tvinga)',
    UNMOUNT: 'Avmontera',
    UNPUBLISH: 'Avpublicera',
    UNSAVED_DATA_WARNING: 'Ändringar som du har gjort kanske inte sparas, är du säker?',
    UNSPECIFIED: 'Ospecificerad',
    UPDATE: 'Uppdatera',
    UPDATE_INITIAL_VALUES_DESC: 'Lås formulärets värden',
    UPDATED_INITIAL_VALUES_NOTIFICATION: 'Uppdaterade initiala formulärvärden',
    USE_SELECTED_SA_AS_TEMPLATE: 'Använd vald leveransöverenskommelse som mall',
    USE_TEMPLATE: 'Använd mall',
    USE: 'Använd',
    USED_FOR: 'Används till',
    USEDCAPACITY: 'Använd kapacitet',
    USERNAME: 'Användarnamn',
    VALIDATEFILEFORMAT: 'Validera filformat',
    VALIDATEFILES: 'Validera filer',
    VALIDATEINTEGRITY: 'Validera Integritet',
    VALIDATELOGICALPHYSICALREPRESENTATION: 'Validera logisk fysisk representation',
    VALIDATEXMLFILE: 'Validera XML-fil',
    VALIDATOR: 'Validator',
    VALIDATORCHOICES: 'Validatorval',
    VALUE: 'Värde',
    VERSION: 'Version',
    VERSIONS: 'Versioner',
    VIEW: 'Visa',
    WORKAREA: 'Arbetsyta',
    WORKSPACECONTENT: 'Arbetsytans innehåll',
    WORKING_ON_NEW_GENERATION: '{{username}} arbetar med en ny generation av detta IP',
    YES: 'Ja',
    YOUHAVELOGGEDOUT: 'Du har loggat ut.',
    en: 'English',
    sv: 'Svenska',
    DEFAULT: 'Standard',
  });
};
