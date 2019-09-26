/* eslint-disable no-bitwise, no-undef */

// Get Latest from http://www.unicode.org/Public/cldr/25/
Soho.Locale.addCulture('lt-LT', {
  // layout/language
  language: 'lt',
  englishName: 'Lithuanian (Lithuania)',
  nativeName: 'lietuvių (Lietuva)',
  // layout/orientation/@characters
  direction: 'left-to-right',
  // ca-gregorian
  calendars: [{
    name: 'gregorian',
    // ca-gregorian/main/dates/calendars/gregorian/dateFormats/
    dateFormat: {
      separator: '-', // Infered
      timeSeparator: ':',
      short: 'yyyy-MM-dd', // use four digit year
      medium: 'yyyy-MM-dd',
      long: 'yyyy m. MMMM d d.',
      full: 'yyyy m. MMMM d d., EEEE',
      month: 'MMMM d d.',
      year: 'yyyy m. MMMM',
      timestamp: 'HH:mm:ss',
      datetime: 'yyyy-MM-dd HH:mm',
      timezone: 'yyyy-MM-dd HH:mm zz',
      timezoneLong: 'yyyy-MM-dd HH:mm zzzz'
    }, // Infered short + short gregorian/dateTimeFormats
    // ca-gregorian/main/dates/calendars/gregorian/days/format/short or abbreviated (2 digit)
    days: {
      wide: ['sekmadienis', 'pirmadienis', 'antradienis', 'trečiadienis', 'ketvirtadienis', 'penktadienis', 'šeštadienis'],
      abbreviated: ['sk', 'pr', 'an', 'tr', 'kt', 'pn', 'št'],
      narrow: ['S', 'P', 'A', 'T', 'K', 'P', 'Š']
    },
    // ca-gregorian/main/dates/calendars/gregorian/months/format/wide
    months: {
      wide: ['sausis', 'vasaris', 'kovas', 'balandis', 'gegužė', 'birželis', 'liepa', 'rugpjūtis', 'rugsėjis', 'spalis', 'lapkritis', 'gruodis'],
      abbreviated: ['saus.', 'vas.', 'kov.', 'bal.', 'geg.', 'birž.', 'liep.', 'rugp.', 'rugs.', 'spal.', 'lapkr.', 'gruod.']
    },
    // ca-gregorian/main/dates/calendars/gregorian/timeFormats/short
    timeFormat: 'HH:mm',
    // ca-gregorian/main/dates/calendars/gregorian/dayPeriods/wide
    dayPeriods: ['pr.p.', 'pop.']
  }],
  // numbers/currencyFormats-numberSystem-latn/standard
  currencySign: 'Lt',
  currencyFormat: '### ¤',
  // numbers/symbols-numberSystem-latn
  numbers: {
    percentSign: '%',
    percentFormat: '### %',
    percentSuffix: ' %',
    percentPrefix: '',
    minusSign: '-',
    decimal: ',',
    group: ' ',
    groupSizes: [3, 3]
  },
  // Resx - Provided By Translation Team
  messages: {
    AboutText: { id: 'AboutText', value: '&copy; {0} „Infor“. Visos teisės saugomos. Čia pateikti žodiniai ir vaizdiniai prekių ženklai yra įmonės „Infor“ ir (arba) jos antrinių bendrovių ir filialų prekių ženklai arba registruotieji prekių ženklai. Visos teisės saugomos. Visi kiti čia nurodyti prekių ženklai yra jų atitinkamų savininkų nuosavybė.' },
    Actions: { id: 'Actions', value: 'Veiksmai', comment: 'Tooltip text for the action button with additional in context actions' },
    AdditionalItems: { id: 'AdditionalItems', value: 'Papildomi elementai', comment: 'Button tooltip used in a list of movable items' },
    Add: { id: 'Add', value: 'Pridėti', comment: 'Add' },
    AddComments: { id: 'AddComments', value: 'Pridėti komentarų', comment: 'Add comments to a form of data' },
    AddNewTab: { id: 'AddNewTab', value: 'Pridėti naują skirtuką', comment: 'Attached to a button that adds new tabs' },
    AdministrativeLeave: { id: 'AdministrativeLeave', value: 'Laisvadienis administracijai leidus', comment: 'As in vacation time from work' },
    AdvancedFilter: { id: 'AdvancedFilter', value: 'Kurti išplėstinį filtrą', comment: 'In a data grid active an advanced filtering feature' },
    Alert: { id: 'Alert', value: 'Įspėjimas', comment: 'Alert' },
    AlertOnPage: { id: 'AlertOnPage', value: 'Įspėjamasis (-ieji) pranešimas (-ai) puslapyje', comment: 'Alert message(s) on page n' },
    All: { id: 'All', value: 'Visi', comment: 'All items in the context of a filter' },
    AllResults: { id: 'AllResults', value: 'Visi rezultatai', comment: 'Search Results Text' },
    AligntoBottom: { id: 'AligntoBottom', value: 'Lygiuoti apačioje', comment: 'Align to Bottom tooltip' },
    AlignCenterHorizontally: { id: 'AlignCenterHorizontally', value: 'Centruoti horizontaliai', comment: 'Align Center Horizontally tooltip' },
    Amber: { id: 'Amber', value: 'Geltona', comment: 'Color in our color pallette' },
    Amethyst: { id: 'Amethyst', value: 'Žydrai violetinė', comment: 'Color in our color pallette' },
    Apply: { id: 'Apply', value: 'Taikyti', comment: 'Text in a button to apply an action' },
    AppMenuTriggerText: { id: 'AppMenuTriggerText', value: 'Meniu', comment: 'Text in a special Module Tab used to trigger an Application Menu open or closed' },
    Attach: { id: 'Attach', value: 'Pridėti', comment: 'Attach' },
    Available: { id: 'Available', value: 'Pasiekiama', comment: 'Button tooltip used in a list of movable items' },
    Azure: { id: 'Azure', value: 'Žydra', comment: 'Color in our color pallette' },
    BackgroundColor: { id: 'BackgroundColor', value: 'Fono spalva', comment: 'add or edit text background color in the editor' },
    Between: { id: 'Between', value: 'Tarp', comment: 'Between in icons for filtering' },
    Blockquote: { id: 'Blockquote', value: 'Cituoti', comment: 'insert a block quote in the editor' },
    Bold: { id: 'Bold', value: 'Paryškinti', comment: 'Make text Bold' },
    Bookmarked: { id: 'Bookmarked', value: 'Pažymėta', comment: 'Bookmark filled - Element is already bookmarked' },
    BookmarkThis: { id: 'BookmarkThis', value: 'Pažymėti šį (šią)', comment: 'Bookmark an element' },
    Breadcrumb: { id: 'Breadcrumb', value: 'Naršymo kelias', comment: 'Text describing the Breadcrumb' },
    Browser: { id: 'Browser', value: 'Naršyklė', comment: 'As in a Web Browser' },
    BulletedList: { id: 'BulletedList', value: 'Sąrašas su ženkleliais', comment: 'Bulleted List tooltip' },
    Calendar: { id: 'Calendar', value: 'Kalendorius', comment: 'Inline Text for the title of the Calendar control' },
    Camera: { id: 'Camera', value: 'Kamera', comment: 'Camera tooltip' },
    Cancel: { id: 'Cancel', value: 'Atšaukti', comment: 'Cancel tooltip' },
    CapsLockOn: { id: 'CapsLockOn', value: 'Įjungtos didžiosios raidės', comment: 'Caps Lock On message' },
    Cart: { id: 'Cart', value: 'Krepšelis', comment: 'Cart tooltip' },
    CenterText: { id: 'CenterText', value: 'Centruoti', comment: 'An Icon Tooltip' },
    CharactersLeft: { id: 'CharactersLeft', value: 'Liko simbolių {0}', comment: 'indicator showing how many more characters you can type.' },
    CharactersMax: { id: 'CharactersMax', value: 'Didžiausias simbolių skaičius ', comment: 'indicator showing how many max characters you can type.' },
    ChangeSelection: { id: 'ChangeSelection', value: '. Pasirinkimui pakeisti naudokite rodyklių klavišus.', comment: 'Audible Text for drop down list help' },
    ChangeView: { id: 'ChangeView', value: 'Keisti rodinį', comment: 'Change the current page from a list of options' },
    Checkbox: { id: 'Checkbox', value: 'Žymimasis langelis', comment: 'Checkbox tooltip' },
    Checked: { id: 'Checked', value: 'Pažymėta', comment: 'Checked tooltip' },
    Clear: { id: 'Clear', value: 'Valyti', comment: 'Tooltip for a Clear Action' },
    ClearFilter: { id: 'ClearFilter', value: 'Valyti filtrą', comment: 'Clear the current filter criteria' },
    ClearFormatting: { id: 'ClearFormatting', value: 'Valyti formatavimo nuostatas', comment: 'Clear the formatting in editor' },
    ClearSelection: { id: 'ClearSelection', value: '(valyti atranką)', comment: 'clear dropdown selection' },
    Clock: { id: 'Clock', value: 'Laikrodis', comment: 'Clock tooltip' },
    Close: { id: 'Close', value: 'Uždaryti', comment: 'Tooltip for a Close Button Action' },
    Clickable: { id: 'Clickable', value: 'Reaguojantis į spustelėjimą', comment: 'Clickable in editor' },
    Copy: { id: 'Copy', value: 'Kopijuoti', comment: 'Copy tooltip' },
    Collapse: { id: 'Collapse', value: 'Sutraukti', comment: 'Collapse / close a tree/submenu' },
    CollapseAppTray: { id: 'CollapseAppTray', value: 'Sutraukti programų dėklą', comment: 'Collapse App Tray tooltip' },
    Columns: { id: 'Columns', value: 'Stulpeliai', comment: 'Columns tooltip' },
    Comments: { id: 'Comments', value: 'Komentarai', comment: 'Comments on an form' },
    CompanyHoliday: { id: 'CompanyHoliday', value: 'Bendrovės atostogos', comment: 'A holiday provided by work.' },
    Component: { id: 'Component', value: 'Komponentas', comment: 'As in a UI component - building block.' },
    Compose: { id: 'Compose', value: 'Kurti', comment: 'Compose tooltip' },
    Completed: { id: 'Completed', value: 'Atlikta', comment: 'Text For a Completed Status' },
    Confirm: { id: 'Confirm', value: 'Patvirtinti', comment: 'Confirm tooltip' },
    ConfirmOnPage: { id: 'ConfirmOnPage', value: 'Patvirtinti pranešimą (-us) puslapyje', comment: 'Confirm message(s) on page n' },
    CookiesEnabled: { id: 'CookiesEnabled', value: 'Slapukai įjungti', comment: 'Returns if browser cookies are enabled or not.' },
    Contains: { id: 'Contains', value: 'Apima', comment: 'Contains in icons for filtering' },
    CssClass: { id: 'CssClass', value: 'Css Klasė', comment: 'Label for entering a Css Class name' },
    Cut: { id: 'Cut', value: 'Iškirpti', comment: 'Cut tooltip' },
    Date: { id: 'Date', value: 'Data', comment: 'Describes filtering by a date data type' },
    Day: { id: 'Day', value: 'Diena', comment: 'Shows view with day events' },
    Days: { id: 'Days', value: 'Dienos ', comment: 'Show how many days until an event' },
    DaysOverdue: { id: 'DaysOverdue', value: '{0} d. vėluojama', comment: 'For a task /date UI' },
    DaysRemaining: { id: 'DaysRemaining', value: '{0} d. liko', comment: 'For a task /date UI' },
    Delete: { id: 'Delete', value: 'Naikinti', comment: 'Delete Toolbar Action Tooltip' },
    DeviceName: { id: 'Device', value: 'Įrenginys', comment: 'Name of the Device' },
    DistributeHoriz: { id: 'DistributeHoriz', value: 'Paskirstyti horizontaliai', comment: 'Icon button tooltip for action that distributes elements across Horizontally' },
    Document: { id: 'Document', value: 'Dokumentas', comment: 'Document tooltip' },
    DiscretionaryTimeOff: { id: 'DiscretionaryTimeOff', value: 'Atostogos savo nuožiūra', comment: 'As in work time off' },
    Dirty: { id: 'Dirty', value: 'Eilutė pakeista', comment: 'Record is dirty / modified' },
    Drilldown: { id: 'Drilldown', value: 'Detalizuoti', comment: 'Drill by moving page flow into a record' },
    Drillup: { id: 'Drillup', value: 'Pereiti prie bendresnio', comment: 'Opposite of Drilldown, move back up to a larger set of records' },
    Dropdown: { id: 'Dropdown', value: 'Išplečiamasis', comment: 'Dropdown' },
    DoesNotContain: { id: 'DoesNotContain', value: 'Neapima', comment: 'Does Not Contain in icons for filtering' },
    DoesNotEndWith: { id: 'DoesNotEndWith', value: 'Nesibaigia su', comment: 'For condition filtering' },
    DoesNotEqual: { id: 'DoesNotEqual', value: 'Nelygus', comment: 'Does Not Equal in icons for filtering' },
    DoesNotStartWith: { id: 'DoesNotStartWith', value: 'Neprasideda nuo', comment: 'For condition filtering' },
    Down: { id: 'Down', value: 'Žemyn', comment: 'Down tooltip' },
    Download: { id: 'Download', value: 'Atsisiųsti', comment: 'Download tooltip' },
    Duplicate: { id: 'Duplicate', value: 'Dubliuoti', comment: 'Duplicate tooltip' },
    EitherSelectedOrNotSelected: { id: 'EitherSelectedOrNotSelected', value: 'Pasirinkta arba nepasirinkta', comment: 'Either Selected Or NotSelected in icons for filtering' },
    EndsWith: { id: 'EndsWith', value: 'Baigiasi su', comment: 'for condition filtering' },
    EnterComments: { id: 'EnterComments', value: 'Įveskite pastabas čia...', comment: 'Placeholder text for a text input (comments)' },
    Error: { id: 'Error', value: 'Klaida', comment: 'Title, Spoken Text describing fact an error has occured' },
    ErrorAllowedTypes: { id: 'ErrorAllowedTypes', value: 'Failo tipas neleidžiamas', comment: 'Error string for file-upload' },
    ErrorMaxFileSize: { id: 'ErrorMaxFileSize', value: 'Viršytas failo dydžio apribojimas', comment: 'Error string for file-upload' },
    ErrorMaxFilesInProcess: { id: 'ErrorMaxFilesInProcess', value: 'Viršytas maksimalus failų skaičiaus apribojimas', comment: 'Error string for file-upload' },
    ErrorOnPage: { id: 'ErrorOnPage', value: 'Klaidos pranešimas (-ai) puslapyje', comment: 'Error message(s) on page n' },
    EmailValidation: { id: 'EmailValidation', value: 'Neleistinas el. pašto adresas', comment: 'This the rule for email validation' },
    Emerald: { id: 'Emerald', value: 'Smaragdinė', comment: 'Color in our color pallette' },
    Expand: { id: 'Expand', value: 'Išplėsti', comment: 'Expand open a tree/submenu' },
    ExpandAppTray: { id: 'ExpandAppTray', value: 'Išplėsti programų dėklą', comment: 'ExpandAppTray tooltip' },
    ExpandCollapse: { id: 'ExpandCollapse', value: 'Išplėsti / sutraukti', comment: 'Text to toggle a button in a container.' },
    ExportAsSpreadsheet: { id: 'ExportAsSpreadsheet', value: 'Eksportuoti kaip skaičiuoklę', comment: 'Export as Spreadsheet tooltip' },
    Edit: { id: 'Edit', value: 'Redaguoti', comment: 'Edit tooltip' },
    Equals: { id: 'Equals', value: 'Lygus', comment: 'Equals in icons for filtering' },
    Event: { id: 'Event', value: 'Įvykis', comment: 'As in an event that would be in a calendar' },
    ExitFullView: { id: 'ExitFullView', value: 'Išeiti iš viso rodinio', comment: 'Exit Full View tooltip' },
    Export: { id: 'Export', value: 'Eksportuoti', comment: 'Export tooltip' },
    ExportToExcel: { id: 'ExportToExcel', value: 'Eksportuoti į „Excel“', comment: 'Export To Excel menu option in datagrid' },
    Favorite: { id: 'Favorite', value: 'Parankiniai', comment: 'A favorite item' },
    FileUpload: { id: 'FileUpload', value: 'Failo nusiuntimas. Jei norite ieškoti failo, spauskite Enter', comment: 'Screen Reader instructions' },
    FieldFilter: { id: 'FieldFilter', value: 'Laukų filtras', comment: 'Used for Field Filter' },
    Filter: { id: 'Filter', value: 'Filtras', comment: 'Filter tooltip' },
    FirstPage: { id: 'FirstPage', value: 'Pirmas puslapis', comment: 'First Page tooltip' },
    Folder: { id: 'Folder', value: 'Aplankas', comment: 'Folder tooltip' },
    From: { id: 'From', value: 'Nuo', comment: 'Start of a range (of dates)' },
    FullView: { id: 'FullView', value: 'Visas rodinys', comment: 'Full View tooltip' },
    GoForward: { id: 'GoForward', value: 'Pirmyn', comment: 'Move Page / object this direction' },
    GoBack: { id: 'GoBack', value: 'Grįžti', comment: 'Move Page / object this directionp' },
    GoDown: { id: 'GoDown', value: 'Žemyn', comment: 'Move Page / object this directionp' },
    GoUp: { id: 'GoUp', value: 'Viršun', comment: 'Move Page / object this direction' },
    Go: { id: 'Go', value: 'Pirmyn', comment: 'Go, perform a movement, start a search, move to the next "thing" in a workflow.' },
    Graphite: { id: 'Graphite', value: 'Grafito', comment: 'Color in our color pallette' },
    GreaterOrEquals: { id: 'GreaterOrEquals', value: 'Daugiau arba lygu', comment: 'Greater Than Or Equals in icons for filtering' },
    GreaterThan: { id: 'GreaterThan', value: 'Daugiau nei', comment: 'Greater Than in icons for filtering' },
    Grid: { id: 'Grid', value: 'Tinklelis', comment: 'Grid tooltip' },
    Hour: { id: 'Hour', value: 'Valanda', comment: 'the hour portion of a time' },
    Hours: { id: 'Hours', value: 'Valandos', comment: 'the hour portion of a time (plural)' },
    HeadingThree: { id: 'HeadingThree', value: 'Trečia antraštė', comment: 'Heading Three tooltip' },
    HeadingFour: { id: 'HeadingFour', value: 'Ketvirta antraštė', comment: 'Heading Four tooltip' },
    Highest: { id: 'Highest', value: 'Didžiausia', comment: 'Highest Four tooltip' },
    Home: { id: 'Home', value: 'Į pradžią', comment: 'Home tooltip' },
    HtmlView: { id: 'HtmlView', value: 'Html rodinys', comment: 'Html View tooltip' },
    Image: { id: 'Image', value: 'Vaizdas', comment: 'Image of something' },
    Import: { id: 'Import', value: 'Importuoti', comment: 'Import tooltip' },
    Info: { id: 'Info', value: 'Informacija', comment: 'Info tooltip' },
    InfoOnPage: { id: 'InfoOnPage', value: 'Informacinis (-iai) pranešimas (-ai) puslapyje', comment: 'Information message(s) on page n' },
    InProgress: { id: 'In Progress', value: 'Vykdoma', comment: 'Info tooltip that an action is in progress' },
    Insert: { id: 'Insert', value: 'Įterpti', comment: 'Insert Modal Dialog Button' },
    InsertAnchor: { id: 'InsertAnchor', value: 'Įterpti prieraišą', comment: 'Insert Acnhor (link) in an editor' },
    InsertImage: { id: 'InsertImage', value: 'Įterpti atvaizdą', comment: 'Insert Image in an editor' },
    InsertLink: { id: 'InsertLink', value: 'Įterpti nuorodą', comment: 'Insert Link in an editor' },
    InsertUrl: { id: 'InsertUrl', value: 'Įterpti URL', comment: 'Insert a Url in an editor' },
    Italic: { id: 'Italic', value: 'Padaryti pasvirusį', comment: 'Make Text Italic' },
    InvalidDate: { id: 'InvalidDate', value: 'Neleistina data', comment: 'validation message for wrong date format (short)' },
    InvalidTime: { id: 'InvalidTime', value: 'Neleistinas laikas', comment: 'validation message for wrong time format' },
    Inventory: { id: 'Inventory', value: 'Atsargos', comment: 'Icon button tooltop for Inventory Action' },
    InRange: { id: 'InRange', value: 'Intervale', comment: 'In Range in icons for filtering' },
    IsEmpty: { id: 'IsEmpty', value: 'Yra tuščias', comment: 'Is Empty in icons for filtering' },
    IsNotEmpty: { id: 'IsNotEmpty', value: 'Nėra tuščias', comment: 'Is Not Empty in icons for filtering' },
    ItemsSelected: { id: 'ItemsSelected', value: 'Pasirinkti elementai', comment: 'Num of Items selected for swaplist' },
    JustifyCenter: { id: 'JustifyCenter', value: 'Centruoti', comment: 'justify text to center in the editor' },
    JustifyLeft: { id: 'JustifyLeft', value: 'Lygiuoti kairėje', comment: 'justify text to left in the editor' },
    JustifyRight: { id: 'JustifyRight', value: 'Lygiuoti dešinėje', comment: 'justify text to right in the editor' },
    Keyword: { id: 'Keyword', value: 'Raktinis žodis', comment: 'Describes filtering by a keyword search' },
    Launch: { id: 'Launch', value: 'Paleisti', comment: 'Launch' },
    LastPage: { id: 'LastPage', value: 'Paskutinis puslapis', comment: 'Last Page tooltip' },
    Left: { id: 'Left', value: 'Kairė', comment: 'Left tooltip' },
    Legend: { id: 'Legend', value: 'Legenda', comment: 'As in a chart legend' },
    LessOrEquals: { id: 'LessOrEquals', value: 'Mažiau arba lygu', comment: 'Less Than Or Equals in icons for filtering' },
    LessThan: { id: 'LessThan', value: 'Mažiau nei', comment: 'Less Than in icons for filtering' },
    Link: { id: 'Link', value: 'Saitas', comment: 'Link - as in hyperlink - icon tooltop' },
    Load: { id: 'Load', value: 'Įkelti', comment: 'Load icon tooltip' },
    Loading: { id: 'Loading', value: 'Įkeliama', comment: 'Text below spinning indicator to indicate loading' },
    Locale: { id: 'Locale', value: 'Lokalė', comment: 'The users locale string for example en-US, it-It' },
    Locked: { id: 'Locked', value: 'Užrakinta', comment: 'Locked tooltip' },
    Logout: { id: 'Logout', value: 'Išsiregistruoti', comment: 'Log out of the application' },
    Lookup: { id: 'Lookup', value: 'Peržvalga', comment: 'Lookup - As in looking up a record or value' },
    Lowest: { id: 'Lowest', value: 'Mažiausia', comment: 'Lowest - As in Lowest value' },
    Mail: { id: 'Mail', value: 'Paštas', comment: 'Mail tooltip' },
    MapPin: { id: 'MapPin', value: 'Ženkliukas', comment: 'Map Pin tooltip' },
    Maximize: { id: 'Maximize', value: 'Maksimizuoti', comment: 'Maximize a screen or dialog in the UI' },
    Median: { id: 'Median', value: 'Mediana', comment: 'Median in Mathematics' },
    Medium: { id: 'Medium', value: 'Vidutinis', comment: 'Describes a Medium sized Row Height in a grid/list' },
    Menu: { id: 'Menu', value: 'Meniu', comment: 'Menu tooltip' },
    MingleShare: { id: 'MingleShare', value: 'Bendrinti su „Ming.le“', comment: 'Share the contextual object/action in the mingle system' },
    Minutes: { id: 'Minutes', value: 'Minutės', comment: 'the minutes portion of a time' },
    Minimize: { id: 'Minimize', value: 'Minimizuoti', comment: 'Minimize tooltip' },
    Minus: { id: 'Minus', value: 'Minus', comment: 'Minus tooltip' },
    Mobile: { id: 'Mobile', value: 'Mobilusis', comment: 'Indicates a mobile device (phone tablet ect)' },
    Month: { id: 'Month', value: 'Mėnuo', comment: 'As in a date month' },
    More: { id: 'More', value: 'Daugiau...', comment: 'Text Indicating More Buttons or form content' },
    MoreActions: { id: 'MoreActions', value: 'Daugiau veiksmų', comment: 'Text on the More Actions button indictating hidden functions' },
    MoveToLeft: { id: 'MoveToLeft', value: 'Pereiti į kairę', comment: 'Button tooltip used in a list of movable items' },
    MoveToRight: { id: 'MoveToRight', value: 'Pereiti į dešinę', comment: 'Button tooltip used in a list of movable items' },
    MsgDirty: { id: 'MsgDirty', value: ', modifikuota', comment: 'for modified form fields' },
    New: { id: 'New', value: 'Naujas', comment: 'Add new rowstatus in datagrid' },
    NewDocument: { id: 'NewDocument', value: 'Naujas dokumentas', comment: 'New Document tooltip' },
    NewItem: { id: 'NewItem', value: 'Naujas elementas', comment: 'New item in listbuilder' },
    NewWindow: { id: 'NewWindow', value: 'Naujas langas', comment: 'Contents open in a new browser window.' },
    Next: { id: 'Next', value: 'Kitas', comment: 'Next in icons tooltip' },
    NextPage: { id: 'NextPage', value: 'Kitas puslapis', comment: 'Next on Pager' },
    NextMonth: { id: 'NextMonth', value: 'Kitas mėnuo', comment: 'the label for the button that moves calendar to next/prev' },
    No: { id: 'No', value: 'Ne', comment: 'On a dialog button' },
    NoData: { id: 'NoData', value: 'Duomenų nėra', comment: 'Shown when there is no rows shown in a list' },
    NoDataFilter: { id: 'NoDataFilter', value: 'Duomenų nėra. Parinkite naujas filtro nuostatas, kad rezultatų būtų daugiau.', comment: 'Shown when there is no rows shown in a list' },
    NoDataList: { id: 'NoDataList', value: 'Duomenų nėra. Parinkite elementų iš viršuje pateikto sąrašo, kad rezultatų būtų daugiau.', comment: 'Shown when there is no rows shown in a list' },
    None: { id: 'None', value: 'Jokia', comment: 'None to pick clear color' },
    NoResults: { id: 'NoResults', value: 'Nieko nerasta', comment: 'Search Results Text' },
    Normal: { id: 'Normal', value: 'Įprastinis', comment: 'Normal row height' },
    Notes: { id: 'Notes', value: 'Pastabos', comment: 'Notes icon tooltip' },
    NotSelected: { id: 'NotSelected', value: 'Nepasirinkta', comment: 'Not Selected in icons for filtering' },
    NumberList: { id: 'NumberList', value: 'Numerių sąrašas', comment: 'Number List tooltip' },
    Ok: { id: 'Ok', value: 'Gerai', comment: 'Ok button on a dialog' },
    OpenBackClose: { id: 'OpenBackClose', value: 'Atidaryti / grįžti / uždaryti', comment: 'Open / Back / Close tooltip' },
    OpenClose: { id: 'OpenClose', value: 'Atidaryti / uždaryti', comment: 'Open / Close tooltip' },
    OperatingSystem: { id: 'OperatingSystem', value: 'Operacinė sistema', comment: 'Device Operating System' },
    OrderedList: { id: 'OrderedList', value: 'Įterpti / šalinti numerių sąrašą', comment: 'Insert an Ordered list in the editor' },
    Page: { id: 'Page', value: 'puslapis ', comment: 'Text on the pager links' },
    PageOf: { id: 'PageOf', value: '{0} puslapis iš {1}', comment: 'Pager Text Showing current and number of pages' },
    PageOn: { id: 'PageOn', value: 'Dabar esate puslapyje ', comment: 'Text on the pager links' },
    PaidTimeOff: { id: 'PaidTimeOff', value: 'Apmokamos atostogos', comment: 'As in vacation from work' },
    Paste: { id: 'Paste', value: 'Įklijuoti', comment: 'Paste icon tooltip' },
    PasswordValidation: { id: 'PasswordValidation', value: '<strong>Slaptažodyje turi būti:</strong><br>bent 10 simbolių;<br>bent vienas simbolis didžiąja raide;<br>bent vienas simbolis mažąja raide;<br>vienas specialusis simbolis;<br>neturi būti jūsų vartotojo vardo;<br>jūsų anksčiau naudoto slaptažodžio.<br>', comment: 'Password validation requirements' },
    PasswordConfirmValidation: { id: 'PasswordConfirmValidation', value: 'Slaptažodžiai turi sutapti', comment: 'Password Confirm validation' },
    Peak: { id: 'Peak', value: 'Didžiausia vertė', comment: 'the max or peak value in a chart' },
    Pending: { id: 'Pending', value: 'Laukiama', comment: 'An event or task is pending' },
    PersonalizeColumns: { id: 'PersonalizeColumns', value: 'Pritaikyti stulpelius', comment: 'Customize Columns in a Grid' },
    Plan: { id: 'Plan', value: 'Planinės', comment: 'As in type of vacation plan' },
    Platform: { id: 'Platform', value: 'Platforma', comment: 'The users operating system i.e. mac, windows' },
    Period: { id: 'Period', value: 'Laikotarpis', comment: 'the am/pm portion of a time' },
    PressDown: { id: 'PressDown', value: 'Jei norite pasirinkti datą, spauskite rodyklę žemyn', comment: 'the audible label for Tooltip about how to operate the date picker' },
    PressShiftF10: { id: 'PressShiftF10', value: 'Jei norite atidaryti kontekstinį meniu, spauskite Shift + F10.', comment: 'the audible infor for screen readers on how to use a field with a popup menu' },
    Previous: { id: 'Previous', value: 'Ankstesnis', comment: 'Previous icon tooltip - moved to previous record' },
    PreviousMonth: { id: 'PreviousMonth', value: 'Ankstesnis mėnuo', comment: 'the label for the button that moves calendar to next/prev' },
    PreviousPage: { id: 'PreviousPage', value: 'Ankstesnis puslapis', comment: 'Previous Page tooltip' },
    Print: { id: 'Print', value: 'Spausdinti', comment: 'Print tooltip' },
    Range: { id: 'Range', value: 'Diapazonas', comment: 'Range for tooltip' },
    RecordsPerPage: { id: 'RecordsPerPage', value: '{0} įrašai (-ų) puslapyje', comment: 'Dropdown allows the user to select how many visible records {} shows select value.' },
    Redo: { id: 'Redo', value: 'Perdaryti', comment: 'Redo tooltip' },
    ReorderRows: { id: 'ReorderRows', value: 'Perrikiuoti eilutes', comment: 'Drag and Reorder Grid Rows' },
    Refresh: { id: 'Refresh', value: 'Atnaujinti', comment: 'Refresh tooltip' },
    RequestTimeOff: { id: 'RequestTimeOff', value: 'Atostogų prašymas', comment: 'Making a request for time off work.' },
    Required: { id: 'Required', value: 'Privalomas', comment: 'indicates a form field is manditory' },
    Reset: { id: 'Reset', value: 'Atkurti', comment: 'Reset tooltip' },
    ResetDefault: { id: 'ResetDefault', value: 'Atkurti numatytąsias vertes', comment: 'Reset Datagrid Columns, Filter and other Layout' },
    Result: { id: 'Result', value: 'Rezultatas', comment: 'Showing a single result in a List' },
    Results: { id: 'Results', value: 'Rezultatai (-ų)', comment: 'As in showing N Results (plural) in a List' },
    RightAlign: { id: 'RightAlign', value: 'Lygiuoti dešinėje', comment: 'Right Align tooltip' },
    RightAlignText: { id: 'RightAlignText', value: 'Lygiuoti dešinėje', comment: 'Right Align Text tooltip' },
    Right: { id: 'Right', value: 'Dešinė', comment: 'Right' },
    Roles: { id: 'Roles', value: 'Vaidmenys', comment: 'Roles tooltip' },
    RowHeight: { id: 'RowHeight', value: 'Eilutės aukštis', comment: 'Describes the Height for Rows in a Data Grid' },
    Ruby: { id: 'Ruby', value: 'Rubino', comment: 'Color in our color pallette' },
    RunFilter: { id: 'RunFilter', value: 'Naudoti filtrą', comment: 'Execute the current filter criteria' },
    SameWindow: { id: 'SameWindow', value: 'Tas pats langas', comment: 'Contents open in the same browser window.' },
    Save: { id: 'Save', value: 'Įrašyti', comment: 'Save tooltip' },
    SaveCurrentView: { id: 'SaveCurrentView', value: 'Įrašyti dabartinį rodinį', comment: 'Datagrids contain view sets. This menu option saves them' },
    SavedViews: { id: 'SavedViews', value: 'Įrašyti rodiniai', comment: 'Label for a list of Views' },
    Schedule: { id: 'Schedule', value: 'Grafikas', comment: 'Shows a schedule view' },
    Seconds: { id: 'Seconds', value: 'Sek.', comment: 'the seconds portion of a time' },
    Search: { id: 'Search', value: 'Ieškoti', comment: 'Search tooltip' },
    SearchColumnName: { id: 'SearchColumnName', value: 'Ieškoti stulpelio pavadinimo', comment: 'Search for a datagrid column by name' },
    SearchFolder: { id: 'SearchFolder', value: 'Ieškoti aplanke', comment: 'Search Folder tooltip' },
    SearchList: { id: 'SearchList', value: 'Ieškoti sąraše', comment: 'Search List tooltip' },
    Select: { id: 'Select', value: 'Rinktis', comment: 'text describing a select action' },
    SelectDay: { id: 'SelectDay', value: 'Pasirinkti dieną', comment: 'Select a day in the calendar picker' },
    Selected: { id: 'Selected', value: 'Pasirinktas', comment: 'text describing a selected object' },
    SelectAll: { id: 'SelectAll', value: 'Pasirinkti viską', comment: 'describes the action of selecting all items available in a list' },
    Send: { id: 'Send', value: 'Siųsti', comment: 'Send tooltip' },
    SetTime: { id: 'SetTime', value: 'Nustatyti laiką', comment: 'button text that inserts time when clicked' },
    Settings: { id: 'Settings', value: 'Parametrai', comment: 'Settings tooltip' },
    Short: { id: 'Short', value: 'Trumpas', comment: 'Describes a Shorted Row Height in a grid/list' },
    ShowFilterRow: { id: 'ShowFilterRow', value: 'Rodyti fìltro eilutę', comment: 'Toggle a row with filer info above a list' },
    ShowLess: { id: 'ShowLess', value: 'Rodyti mažiau', comment: 'Show less form content' },
    ShowMore: { id: 'ShowMore', value: 'Rodyti daugiau', comment: 'Show more form content' },
    SickTime: { id: 'SickTime', value: 'Ligos trukmė', comment: 'Time off sick from work' },
    Slate: { id: 'Slate', value: 'Pilkšvai melsva', comment: 'Color in our color pallette' },
    SlideOf: { id: 'SlideOf', value: '{0} skaidrė iš {1}', comment: 'Slide Text Showing current and total number of slides' },
    SlidesOf: { id: 'SlidesOf', value: '{0} ir {1} skaidrės iš {2}', comment: 'Slides Text Showing current slides and total number of slides' },
    SliderHandle: { id: 'SliderHandle', value: 'Rankenėlė', comment: 'Description of the portion of a Slider control that is focusable and changes its value, followed in code by the name of the control' },
    SliderMaximumHandle: { id: 'SliderMaximumHandle', value: 'Didžiausio diapazono rankenėlė', comment: 'Describes a maximum value handle in a Range (double slider), followed in code by the name of the control' },
    SliderMinimumHandle: { id: 'SliderMinimumHandle', value: 'Mažiausio diapazono rankenėlė', comment: 'Describes a minimum value handle in a Range (double slider), followed in code by the name of the control' },
    SkipToMain: { id: 'SkipToMain', value: 'Pereiti prie pagrindinio turinio', comment: 'Skip link in header, jumps when clicked on to main area' },
    Status: { id: 'Status', value: 'Būsena', comment: 'Status of someting thats submitted fx in progress, approved' },
    StartsWith: { id: 'StartsWith', value: 'Prasideda nuo', comment: 'for condition filtering' },
    StepsCompleted: { id: 'StepsCompleted', value: 'Atlikta {0} veiksm. iš {1}', comment: 'steps of a wizard/chart' },
    StrikeThrough: { id: 'StrikeThrough', value: 'Perbrauktas', comment: 'turn on and off strike through text in text editor (like word)' },
    SortAtoZ: { id: 'SortAtoZ', value: 'Rikiuoti didėjimo tvarka', comment: 'Sort A to Z in icons for filtering' },
    SortZtoA: { id: 'SortZtoA', value: 'Rikiuoti mažėjimo tvarka', comment: 'Sort Z to A in icons for filtering' },
    SortDown: { id: 'SortDown', value: 'Rikiuoti mažėjimo tvarka', comment: 'Sort Down tooltip' },
    SortUp: { id: 'SortUp', value: 'Rikiuoti didėjimo tvarka', comment: 'Sort Up tooltip' },
    Subscript: { id: 'Subscript', value: 'Apatinis indeksas', comment: 'Turn on and off Subscript text in text editor (like word)' },
    Superscript: { id: 'Superscript', value: 'Viršutinis indeksas', comment: 'Turn on and off Superscript text in text editor (like word)' },
    Tabs: { id: 'Tabs', value: 'Skirtukai...', comment: 'Used in the Tabs Control\'s more menu, preceeded by a number that describes how many tabs are in the spillover menu' },
    Tack: { id: 'Tack', value: 'Ženkliukas', comment: 'Pin an object' },
    Tall: { id: 'Tall', value: 'Aukštas', comment: 'Describes a Taller Row Height in a grid/list' },
    Target: { id: 'Target', value: 'Paskirtis', comment: 'Label for an input to enter a Target (Url Attribute)' },
    TeamEvent: { id: 'TeamEvent', value: 'Kolektyvo renginys', comment: 'Having an event with a work team' },
    TestLocaleDefaults: { id: 'TestLocaleDefaults', value: 'Bandyti numatytąsias lokalės nuostatas', comment: 'Do not translate' },
    TextColor: { id: 'TextColor', value: 'Teksto spalva', comment: 'add or edit text color in the editor' },
    TextDropArea: { id: 'DropArea', value: 'Kad įkeltumėte, failus nuvilkite', comment: 'text for drop area for advanced fileupload' },
    TextDropAreaWithBrowse: { id: 'TextDropAreaWithBrowse', value: 'Kad įkeltumėte, failus nuvilkite arba spustelėkite <span class=“hyperlink“>Pasirinkti failus</span>', comment: 'text for drop area with browse for advanced fileupload' },
    TextBtnCancel: { id: 'TextBtnCancel', value: 'Atšaukti šio failo įkėlimą', comment: 'text for cancel button for advanced fileupload' },
    TextBtnCloseError: { id: 'TextBtnCloseError', value: 'Uždaryti šią klaidą', comment: 'text for error close button for advanced fileupload' },
    TextBtnRemove: { id: 'TextBtnRemove', value: 'Uždaryti šią klaidą', comment: 'text for remove button for advanced fileupload' },
    Timer: { id: 'Timer', value: 'Laikmatis', comment: 'Timer tooltip' },
    To: { id: 'To', value: 'Iki', comment: 'End of a range (of dates)' },
    Today: { id: 'Today', value: 'Šiandien', comment: 'refering to today on a calendar' },
    ToggleBold: { id: 'ToggleBold', value: 'Kaitalioti paryškintąjį tekstą', comment: 'turn on and off bold in text editor (like word)' },
    ToggleH3: { id: 'ToggleH3', value: 'Kaitalioti 3 antraštę', comment: 'turn on and off heading 3 text' },
    ToggleH4: { id: 'ToggleH4', value: 'Kaitalioti 4 antraštę', comment: 'turn on and off heading 4 text' },
    ToggleItalic: { id: 'ToggleItalic', value: 'Kaitalioti pasvirąjį tekstą', comment: 'turn on and off Italic in text editor (like word)' },
    ToggleUnderline: { id: 'ToggleUnderline', value: 'Kaitalioti pabrauktąjį tekstą', comment: 'turn on and off Underline in text editor (like word)' },
    Toolbar: { id: 'Toolbar', value: 'Įrankių juosta', comment: 'describing the toolbar component' },
    TopAlign: { id: 'TopAlign', value: 'Lygiuoti viršuje', comment: 'Top Align tooltip' },
    Total: { id: 'Total', value: 'Suma', comment: 'Mathematic total of a calculation' },
    Totals: { id: 'Totals', value: 'Iš viso', comment: 'Mathematic total of a calculation (plural)' },
    TreeCollapse: { id: 'TreeCollapse', value: 'Sutraukti medį', comment: 'Tree Collapse tooltip' },
    TreeExpand: { id: 'TreeExpand', value: 'Išplėsti medį', comment: 'Tree Expand tooltip' },
    Turquoise: { id: 'Turquoise', value: 'Žalsvai melsva', comment: 'Color in our color pallette' },
    Up: { id: 'Up', value: 'Viršun', comment: 'Up tooltip' },
    UpComingEvents: { id: 'UpComingEvent', value: 'Artėjantys renginiai', comment: 'List of upcoming calendar events' },
    UpComingTimeOff: { id: 'UpComingTimeOff', value: 'Artėjančios atostogos', comment: 'As in time off work' },
    Upload: { id: 'Upload', value: 'Nusiųsti', comment: 'Upload tooltip' },
    UnavailableDate: { id: 'UnavailableDate', value: 'Neleistina data', comment: 'Unavailable Date Text' },
    Underline: { id: 'Underline', value: 'Pabraukti', comment: 'Make text Underlined' },
    Undo: { id: 'Undo', value: 'Anuliuoti', comment: 'Undo tooltip' },
    Unlocked: { id: 'Unlocked', value: 'Neužrakinta', comment: 'Unlocked tooltip' },
    UnorderedList: { id: 'UnorderedList', value: 'Įterpti / šalinti sąrašą su ženkleliais', comment: 'Insert an Unordered list in the editor' },
    Unsupported: { id: 'Unsupported', value: 'Šis turinys nepasiekiamas, nes jame naudojamos funkcijos, kurių nepalaiko jūsų dabartinė naršyklės versija.', comment: 'Suggesting browser upgrade for missing features.' },
    Url: { id: 'Url', value: 'Url', comment: 'Url tooltip' },
    UseArrow: { id: 'UseArrow', value: '. Pasirinkite rodyklių klavišais.', comment: 'Instructional comments for screen readers' },
    UseEnter: { id: 'UseEnter', value: '. Peržvelkite naudodami klavišą Enter arba rodyklę žemyn.', comment: 'Instructional comments for screen readers' },
    User: { id: 'User', value: 'Vartotojas', comment: 'User tooltip' },
    UserProfile: { id: 'UserProfile', value: 'Vartotojo profilis', comment: 'User Profile tooltip' },
    Version: { id: 'Version', value: 'IDS versija', comment: 'Version of IDS' },
    VerticalMiddleAlign: { id: 'VerticalMiddleAlign', value: 'Lygiuoti vertikaliai centre', comment: 'Vertical Align tooltip' },
    ViewSource: { id: 'ViewSource', value: 'Rodyti šaltinį', comment: 'Toggle the source view in the editor' },
    ViewVisual: { id: 'ViewVisual', value: 'Rodyti tikrąjį vaizdą', comment: 'Toggle the visual view in the editor' },
    Week: { id: 'Week', value: 'Savaitė', comment: 'Shows a view of the current weeks events' },
    Year: { id: 'Year', value: 'Metai', comment: 'As in a date year' },
    Yes: { id: 'Yes', value: 'Taip', comment: 'On a dialog button' }
  }
});
