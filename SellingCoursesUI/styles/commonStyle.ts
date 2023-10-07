import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    secondary_container: {
        flex: 1,
        width: "95%",
        marginLeft: 10,
        marginRight: 10,
    },
    main_container: {
        flex: 1,
        alignItems: 'center'
    },
    horizontal_container: {
        flex: 0,
        flexDirection: "row"
    },
    vertical_container: {
        flex: 1,
        flexDirection: "column"
    },
    icon_style: {
        width: 20,
        height: 20,
        marginHorizontal: 8,
        opacity: 0.6
    },
    large_icon_style: {
        width: 50,
        height: 50,
        marginHorizontal: 8,
        opacity: 0.6,
    },
    header_text_1: {
        fontWeight: "bold",
        fontSize: 40
    },
    header_text_2: {
        fontWeight: "700",
        fontSize: 24
    },
    text_center: {
        textAlign: "center"
    },
    strikethrough_text: {
        textDecorationLine: "line-through"
    },
    text_opacity: {
        opacity: 0.6,
    },
    text_content: {
        fontSize: 16,
    },
    small_text_content: {
        fontSize: 14
    },
    text_bold: {
        fontWeight: '500'
    },
    text_blue: {
        color: '#81b1eb'
    },
    item_center: {
        alignSelf: 'center'
    },
    item_space_between: {
        justifyContent: "space-between"
    },
    underline_border: {
        borderBottomWidth: 2,
        opacity: 0.3,
        borderBottomColor: '#0a0a0a',
        width: "100%"
    },
    large_margin_top: {
        marginTop: 30
    },
    medium_margin_top: {
        marginTop: 20
    },
    medium_margin_vertical: {
        marginVertical: 20
    },
    small_margin_vertical: {
        marginVertical: 12
    },
    small_margin_top: {
        marginTop: 4
    },
    small_marginHorizontal: {
        marginHorizontal: 4
    },
    text_input: {
        width: "80%",
        height: 30,
        padding: 8
    },
    background_purple: {
        backgroundColor: "#c004d1"
    },
    background_green: {
        backgroundColor: "#158579"
    },
    background_red: {
        backgroundColor: "#ed0222"
    }
})