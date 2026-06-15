import { createTheme } from '@mui/material';

const FontSizeMultiplier = 1.25;
const menuWidth = 200;
const HeaderHeight = 70;
const FooterHeight = 50;
const black = "#000000";

const HeaderBgColor = "#2563eb";
const HeaderTxtColor = "#ffffff";

const FooterBgColor = "#1e293b";
const FooterTxtColor = "#ffffff";

const PrimaryBgColor = "#2563eb";
const SecondaryBgColor = "#64748b";

const NavBgColor = "#ffffff";
const NavTxtColor = "#1e293b";

const NavHoverBgColor = "#e0f2fe";
const NavHoverTxtColor = "#2563eb";

const NavSelectedBgColor = "#2563eb";
const NavSelectedTxtColor = "#ffffff";

const BtnPrimaryColor = "#2563eb";
const BtnPrimaryColorHover = "#1d4ed8";

const BtnPrimaryContainedHoverBg = "rgba(37, 99, 235, 0.12)";

const BtnRedColor = "#ef4444";
const BtnRedColorHover = "#dc2626";

const TableHeaderBgColor = "#2563eb";
const TableHeaderTxtColor = "#ffffff";

const TableEvenRowColor = "#f1f5f9";

const theme = createTheme({
    direction: 'rtl',
    typography: {
        fontSize: 14 * FontSizeMultiplier,
        h1: { fontSize: `${2.5 * FontSizeMultiplier}rem` },
        h2: { fontSize: `${2 * FontSizeMultiplier}rem` },
        h3: { fontSize: `${1.75 * FontSizeMultiplier}rem` },
        h4: { fontSize: `${1.5 * FontSizeMultiplier}rem` },
        h5: { fontSize: `${1.25 * FontSizeMultiplier}rem` },
        h6: { fontSize: `${1.1 * FontSizeMultiplier}rem` },
        body1: { fontSize: `${1 * FontSizeMultiplier}rem` },
        body2: { fontSize: `${0.875 * FontSizeMultiplier}rem` },
        button: { fontSize: `${0.875 * FontSizeMultiplier}rem` },
        caption: { fontSize: `${0.75 * FontSizeMultiplier}rem` },
        overline: { fontSize: `${0.75 * FontSizeMultiplier}rem` },
    },
    palette: {
        primary: { main: PrimaryBgColor },
        secondary: { main: SecondaryBgColor },
        background: {
            default: "#f8fafc",
            paper: "#ffffff",
            header: HeaderBgColor,
            footer: FooterBgColor,
            nav: NavBgColor
        },
        nav: {
            main: NavBgColor,
            text: NavTxtColor,
            hover: {
                background: NavHoverBgColor,
                text: NavHoverTxtColor
            },
            selected: {
                background: NavSelectedBgColor,
                text: NavSelectedTxtColor
            }
        }
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: HeaderBgColor,
                    color: HeaderTxtColor,
                    boxShadow: "0 4px 14px rgba(37, 99, 235, 0.25)"
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: "16px",
                }
            },
            variants: [
                {
                    props: { variant: 'footer' },
                    style: {
                        backgroundColor: FooterBgColor,
                        color: FooterTxtColor,
                        borderRadius: 0
                    }
                }
            ]
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    backgroundColor: NavBgColor,
                    color: NavTxtColor,
                    borderRadius: "12px",
                    margin: "6px 10px",
                    width: "calc(100% - 20px)",
                    '&:hover': {
                        backgroundColor: NavHoverBgColor,
                        color: NavHoverTxtColor,
                    },
                    '&.Mui-selected': {
                        backgroundColor: NavSelectedBgColor,
                        color: NavSelectedTxtColor,
                        '&:hover': {
                            backgroundColor: NavSelectedBgColor,
                            color: NavSelectedTxtColor,
                        }
                    }
                }
            }
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: 'inherit !important',
                }
            }
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: 'inherit !important',
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: "12px",
                    padding: "8px 22px",
                    fontWeight: 600,
                },
                contained: {
                    boxShadow: '0 4px 12px rgba(0, 0, 0, .12)',
                    '&:hover': {
                        boxShadow: '0 6px 16px rgba(0, 0, 0, .18)',
                    },
                },
            },
            variants: [
                {
                    props: { variant: 'contained', color: 'primary' },
                    style: {
                        backgroundColor: BtnPrimaryColor,
                        '&:hover': {
                            backgroundColor: BtnPrimaryColorHover,
                        },
                    },
                },
                {
                    props: { variant: 'outlined', color: 'primary' },
                    style: {
                        borderColor: BtnPrimaryColor,
                        color: BtnPrimaryColor,
                        '&:hover': {
                            borderColor: BtnPrimaryColorHover,
                            backgroundColor: BtnPrimaryContainedHoverBg,
                        },
                    },
                },
                {
                    props: { variant: 'contained', color: 'danger' },
                    style: {
                        backgroundColor: BtnRedColor,
                        '&:hover': {
                            backgroundColor: BtnRedColorHover,
                        },
                    },
                },
            ],
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    padding: 8,
                    borderRadius: "12px",

                    '&.MuiIconButton-colorPrimary': {
                        color: BtnPrimaryColor,
                        '&:hover': {
                            backgroundColor: `${BtnPrimaryColor}20`,
                        },
                    },
                    '&.MuiIconButton-colorSecondary': {
                        color: SecondaryBgColor,
                        '&:hover': {
                            backgroundColor: `${SecondaryBgColor}20`,
                        },
                    },
                    '&.MuiIconButton-colorError': {
                        color: BtnRedColor,
                        '&:hover': {
                            backgroundColor: `${BtnRedColor}20`,
                        },
                    },
                    '&.MuiIconButton-colorSuccess': {
                        color: BtnPrimaryColor,
                        '&:hover': {
                            backgroundColor: `${BtnPrimaryColor}20`,
                        },
                    },
                },
            },
            variants: [
                {
                    props: { variant: 'contained', color: 'primary' },
                    style: {
                        backgroundColor: BtnPrimaryColor,
                        color: '#FFFFFF',
                        '&:hover': {
                            backgroundColor: BtnPrimaryColor,
                            opacity: 0.9,
                        },
                    },
                },
                {
                    props: { variant: 'contained', color: 'secondary' },
                    style: {
                        backgroundColor: SecondaryBgColor,
                        color: '#FFFFFF',
                        '&:hover': {
                            backgroundColor: SecondaryBgColor,
                            opacity: 0.9,
                        },
                    },
                },
                {
                    props: { variant: 'contained', color: 'error' },
                    style: {
                        backgroundColor: BtnRedColor,
                        color: '#FFFFFF',
                        '&:hover': {
                            backgroundColor: BtnRedColor,
                            opacity: 0.9,
                        },
                    },
                },
                {
                    props: { color: 'danger' },
                    style: {
                        color: BtnRedColor,
                        '&:hover': {
                            backgroundColor: BtnRedColor,
                            opacity: 0.3,
                            color: black,
                        },
                    },
                },
                {
                    props: { variant: 'contained', color: 'success' },
                    style: {
                        backgroundColor: BtnPrimaryColor,
                        color: '#FFFFFF',
                        '&:hover': {
                            backgroundColor: BtnPrimaryColor,
                            opacity: 0.9,
                        },
                    },
                },
            ],
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        borderRadius: "14px",
                        backgroundColor: "#ffffff",
                    }
                }
            }
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    backgroundColor: TableHeaderBgColor,
                    color: TableHeaderTxtColor,
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    padding: '8px',
                    fontSize: `${1 * FontSizeMultiplier}rem`,
                },
                head: {
                    backgroundColor: TableHeaderBgColor,
                    color: TableHeaderTxtColor,
                    fontWeight: 'bold',
                    fontSize: `${1.1 * FontSizeMultiplier}rem`,
                },
                body: {
                    fontSize: `${1 * FontSizeMultiplier}rem`,
                },
            },
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    '&:nth-of-type(even)': {
                        backgroundColor: TableEvenRowColor,
                    },
                    '&:hover': {
                        backgroundColor: "#e0f2fe",
                    },
                },
            },
        },
    }
});

export {
    menuWidth,
    HeaderHeight,
    FooterHeight,
    HeaderBgColor,
    HeaderTxtColor,
    FooterBgColor,
    FooterTxtColor,
    theme,
    TableHeaderTxtColor,
};