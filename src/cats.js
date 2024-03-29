/**************************************************
 * map.js                                         *
 * Script file for categories and other variables *
 * Author: Héctor Ochoa Ortiz                     *
 * Affil.: TUM SVP                                *
 * Last update: 2023-04-27                        *
 **************************************************/

/**
 * Find out if a selector is disabled, by checking its children nodes.
 *
 * @param {string} name The name of the selector.
 * @return {boolean} True if the selector with name name has no children (is disabled). False otherwise.
 */
function isDisabled(name) {
    var element = document.querySelector('#' + name);
    // Check if the element exists before trying to access its children
    if (element) {
        return element.children.length == 0;
    } else {
        // If the element doesn't exist, you could consider it as disabled or handle as needed
        return true; // Assumes that if the element does not exist, it is considered disabled
    }
}

/**
 * Returns the checked value of a selector with name name.
 *
 * @param {string} name The name of the selector.
 * @return {string} Returns the checked value of a selector with name name.
 */
function getValue(name) {
    return $('input[name="' + name +'"]:checked').val();
}

/**
 * Sets the checked value of a selector with name name.
 * If the value is not in the selector, do nothing.
 *
 * @param {string} name The name of the selector.
 */
function setValue(name, value) {
    if (valueInSelect(name, value)) {
        let input = $('input[name="' + name +'"][value="' + value + '"]')[0];
        input.checked = true;
        input.dispatchEvent(new Event('change'));
    }
}

/**
 * Find out if an option with value value is in a selector with name name.
 *
 * @param {string} name The name of the selector.
 * @return {boolean} True if the selector with name name has an option with value value. False otherwise.
 */
function valueInSelect(name, value) {
    if (value === '' || value === '#') return false;

    // Check if the value is among the options
    return $('input[name="' + name +'"][value="' + value + '"]').length != 0;
}

// Starting values
var selector_values_before_sp_0 = [
    {
        "value": "sg",
        "desc": "desc_sg"
    },
    {
        "value": "ji",
        "desc": "desc_ji"
    },
    {
        "value": "ji_v_sg",
        "desc": "desc_ji_v_sg"
    },
    /*{
        "value": "diff_sg",
        "desc": "desc_diff_sg"
    },*/
    {
        "value": "summ",
        "desc": "desc_summ"
    }
]

// Selector values
var selector_values_after_sp_0 = {
    "sg": {
        "title": "select_sg",
        "values": [
            {
                "value": "tp",
                "desc": "desc"
            },
            {
                "value": "o65",
                "desc": "desc"
            },
            {
                "value": "u18",
                "desc": "desc"
            },
            {
                "value": "ng",
                "desc": "desc"
            },
            {
                "value": "un",
                "desc": "desc"
            },
            {
                "value": "sp",
                "desc": "desc"
            },
            {
                "value": "income",
                "desc": "desc"
            }
        ]
    },
    "ji": {
        "title": "select_justice",
        "values": [
            {
                "value": "ava",
                "desc": "desc"
            },
            {
                "value": "beh",
                "desc": "desc"
            },
            {
                "value": "exp",
                "desc": "desc"
            },
            {
                "value": "acc",
                "desc": "desc"
            }
        ]
    },
    "ji_v_sg": {
        "title": "select_justice",
        "desc": "desc",
        "values": [
            {
                "value": "ava",
                "desc": "desc"
            },
            {
                "value": "beh",
                "desc": "desc"
            },
            {
                "value": "exp",
                "desc": "desc"
            },
            {
                "value": "acc",
                "desc": "desc"
            }
        ]
    },
    "diff_sg": {
        "title": "select_justice",
        "desc": "desc",
        "values": [
            {
                "value": "ava",
                "desc": "desc"
            },
            {
                "value": "beh",
                "desc": "desc"
            }
        ]
    },
    "summ": {}
}
var selector_values_after_sp_1 = {
    "sg": {},
    "ji": {
        "acc": {
            "v1": {
                "title": "select_amenity",
                "values": [
                    {
                        "value": "h",
                        "desc": "desc"
                    },
                    {
                        "value": "e",
                        "desc": "desc"
                    },
                    {
                        "value": "f",
                        "desc": "desc"
                    },
                    {
                        "value": "s",
                        "desc": "desc"
                    },
                    {
                        "value": "cc",
                        "desc": "desc"
                    }
                ]
            },
            "mot": {
                "title": "select_mot",
                "values": [
                    {
                        "value": "w_700",
                        "desc": "desc"
                    },
                    {
                        "value": "b_700",
                        "desc": "desc"
                    },
                    {
                        "value": "wpt_700",
                        "desc": "desc"
                    }
                ]
            }
        },
        "exp": {
            "v1": {
                "title": "select_exp",
                "values": [
                    {
                        "value": "accidents",
                        "desc": "desc"
                    },
                    {
                        "value": "noise",
                        "desc": "desc"
                    },
                    {
                        "value": "pollution",
                        "desc": "desc"
                    }
                ]
            }
        },
        "ava": {
            "v1": {
                "title": "select_ava",
                "values": [
                    {
                        "value": "acc_pt",
                        "desc": "desc"
                    },
                    {
                        "value": "cycleway_density",
                        "desc": "desc"
                    },
                    {
                        "value": "intersection_density",
                        "desc": "desc"
                    }
                ]
            }
        },
        "beh": {
            "v1": {
                "title": "select_beh",
                "values": [
                    {
                        "value": "bike_usage",
                        "desc": "desc"
                    },
                    {
                        "value": "pt_usage",
                        "desc": "desc"
                    },
                    {
                        "value": "walk_usage",
                        "desc": "desc"
                    },
                    {
                        "value": "car_sharing_usage",
                        "desc": "desc"
                    }
                ]
            }
        }
    },
    "ji_v_sg": {
        "acc": {
            "amenity": {
                "title": "select_sg",
                "values": [
                    {
                        "value": "tp",
                        "desc": "desc"
                    },
                    {
                        "value": "o65",
                        "desc": "desc"
                    },
                    {
                        "value": "u18",
                        "desc": "desc"
                    },
                    {
                        "value": "ng",
                        "desc": "desc"
                    }
                ]
            },
            "v1": {
                "title": "select_amenity",
                "values": [
                    {
                        "value": "h",
                        "desc": "desc"
                    },
                    {
                        "value": "e",
                        "desc": "desc"
                    },
                    {
                        "value": "f",
                        "desc": "desc"
                    },
                    {
                        "value": "s",
                        "desc": "desc"
                    },
                    {
                        "value": "cc",
                        "desc": "desc"
                    }
                ]
            },
            "mot": {
                "title": "select_mot",
                "values": [
                    {
                        "value": "w_700",
                        "desc": "desc"
                    },
                    {
                        "value": "b_700",
                        "desc": "desc"
                    },
                    {
                        "value": "wpt_700",
                        "desc": "desc"
                    }
                ]
            }
        },
        "exp": {
            "amenity": {
                "title": "select_sg",
                "values": [
                    {
                        "value": "tp",
                        "desc": "desc"
                    },
                    {
                        "value": "o65",
                        "desc": "desc"
                    },
                    {
                        "value": "u18",
                        "desc": "desc"
                    },
                    {
                        "value": "ng",
                        "desc": "desc"
                    },
                    {
                        "value": "un",
                        "desc": "desc"
                    },
                    {
                        "value": "sp",
                        "desc": "desc"
                    }
                ]
            },
            "v1": {
                "title": "select_exp",
                "values": [
                    {
                        "value": "accidents",
                        "desc": "desc"
                    },
                    {
                        "value": "noise",
                        "desc": "desc"
                    },
                    {
                        "value": "pollution",
                        "desc": "desc"
                    }
                ]
            }
        },
        "ava": {
            "amenity": {
                "title": "select_sg",
                "values": [
                    {
                        "value": "tp",
                        "desc": "desc"
                    },
                    {
                        "value": "o65",
                        "desc": "desc"
                    },
                    {
                        "value": "u18",
                        "desc": "desc"
                    },
                    {
                        "value": "ng",
                        "desc": "desc"
                    },
                    {
                        "value": "un",
                        "desc": "desc"
                    },
                    {
                        "value": "sp",
                        "desc": "desc"
                    }
                ]
            },
            "v1": {
                "title": "select_ava",
                "values": [
                    {
                        "value": "acc_pt",
                        "desc": "desc"
                    },
                    {
                        "value": "cycleway_density",
                        "desc": "desc"
                    },
                    {
                        "value": "intersection_density",
                        "desc": "desc"
                    }
                ]
            }
        },
        "beh": {
            "amenity": {
                "title": "select_sg",
                "values": [
                    {
                        "value": "tp",
                        "desc": "desc"
                    },
                    {
                        "value": "o65",
                        "desc": "desc"
                    },
                    {
                        "value": "u18",
                        "desc": "desc"
                    },
                    {
                        "value": "ng",
                        "desc": "desc"
                    },
                    {
                        "value": "un",
                        "desc": "desc"
                    },
                    {
                        "value": "sp",
                        "desc": "desc"
                    }
                ]
            },
            "v1": {
                "title": "select_beh",
                "values": [
                    {
                        "value": "bike_usage",
                        "desc": "desc"
                    },
                    {
                        "value": "pt_usage",
                        "desc": "desc"
                    },
                    {
                        "value": "walk_usage",
                        "desc": "desc"
                    },
                    {
                        "value": "car_sharing_usage",
                        "desc": "desc"
                    }
                ]
            }
        }
    },
    "diff_sg": {
        "ava": {
            "v1": {
                "title": "select_sg",
                "values": [
                    {
                        "value": "gender",
                        "desc": "desc"
                    },
                    {
                        "value": "education",
                        "desc": "desc"
                    },
                    {
                        "value": "income",
                        "desc": "desc"
                    },
                    {
                        "value": "age_young",
                        "desc": "desc"
                    },
                    {
                        "value": "age_old",
                        "desc": "desc"
                    }
                ]
            },
            "mot": {
                "title": "select_mot",
                "values": [
                    {
                        "value": "has_driving_license",
                        "desc": "desc"
                    },
                    {
                        "value": "owns_bike",
                        "desc": "desc"
                    },
                    {
                        "value": "owns_ebike",
                        "desc": "desc"
                    },
                    {
                        "value": "owns_car_sharing_membership",
                        "desc": "desc"
                    }
                ]
            }
        },
        "beh": {
            "v1": {
                "title": "select_sg",
                "values": [
                    {
                        "value": "gender",
                        "desc": "desc"
                    },
                    {
                        "value": "education",
                        "desc": "desc"
                    },
                    {
                        "value": "income",
                        "desc": "desc"
                    },
                    {
                        "value": "age_young",
                        "desc": "desc"
                    },
                    {
                        "value": "age_old",
                        "desc": "desc"
                    }
                ]
            },
            "mot": {
                "title": "select_mot",
                "values": [
                    {
                        "value": "auto_usage",
                        "desc": "desc"
                    },
                    {
                        "value": "pt_usage",
                        "desc": "desc"
                    },
                    {
                        "value": "bicycle_usage",
                        "desc": "desc"
                    },
                    {
                        "value": "car_sharing_usage",
                        "desc": "desc"
                    }
                ]
            }
        }
    },
    "summ": {}
}

var selected_values;

function updateSelectorAfterSP0(name, map_type_value) {
    // Find the .select-main to change
    let curr_sp = document.querySelector('#sp-1');
    curr_sp.style.display = 'block';
    curr_sp.style.marginLeft = '20px'; 

    try {
    
        // Fetch possible values
        let selector_dict = selector_values_after_sp_0[map_type_value]["values"];
        if (selector_dict.length == 0) { throw EvalError; }

        // Empty select options
        let select_options = curr_sp.querySelector(".select-options");
        select_options.innerHTML = "";

        // Create the different options
        for (const v of selector_dict) {
            var option = document.createElement("div");
            option.setAttribute("class", "select-option");

            var radio = document.createElement("input");
            radio.setAttribute("type", "radio");
            radio.setAttribute("name", name);
            radio.setAttribute("id", v["value"]);
            radio.setAttribute("value", v["value"]);
            option.appendChild(radio);

            var label = document.createElement("label");
            label.setAttribute("for", v["value"]);
            label.setAttribute("i18n", v["value"]);
            option.appendChild(label);

            if (v["desc"] !== "desc") {
                var info = document.createElement("div");
                info.setAttribute("class", "select-title-info");
                info.innerHTML = "&#x1F6C8;";

                var info_tooltip = document.createElement("span");
                info_tooltip.setAttribute("class", "info-tooltip");
                info_tooltip.setAttribute("i18n", v["desc"]);
                info.appendChild(info_tooltip);

                option.appendChild(info);
            }
            select_options.appendChild(option);
        }

        // Unfold in the interface
        curr_sp.querySelector("input[type=checkbox]").checked = true;

        // Add function when checked
        $('input[type=radio][name=' + name + ']').change(function() {
            updateSelectorAfterSP1("v1", this.value);
            updateSelectorAfterSP2("amenity", this.value);
            updateSelectorAfterSP2("mot", this.value);
            
            if (correctValues()) {
                changeMap();
            }
        });
    } catch (error) {
        curr_sp.style.display = 'none';

        // Empty select options
        let select_options = curr_sp.querySelector(".select-options");
        select_options.innerHTML = "";
    }
    translatePage();
}

function updateSelectorAfterSP1(name, justice_value) {
    let map_type_value = getValue("map_type");

   let existentSP2 = document.querySelector('#sp-2');
    if (existentSP2) {
        existentSP2.remove();
    }

    let curr_sp = document.createElement('div');
    curr_sp.setAttribute('class', 'select-main');
    curr_sp.setAttribute('id', 'sp-2');
    curr_sp.style.display = 'none'; // Initially hidden, show it when ready

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    curr_sp.appendChild(checkbox);

    try {
        // Fetch possible values
        let selector_dict = selector_values_after_sp_1[map_type_value][justice_value][name]["values"];
        if (selector_dict.length == 0) { throw EvalError; }

        // Empty select options
        let select_options = curr_sp.querySelector(".select-options");
        select_options.innerHTML = "";

        // Create the different options
        for (const v of selector_dict) {
            var option = document.createElement("div");
            option.setAttribute("class", "select-option");

            var radio = document.createElement("input");
            radio.setAttribute("type", "radio");
            radio.setAttribute("name", name);
            radio.setAttribute("id", v["value"]);
            radio.setAttribute("value", v["value"]);
            option.appendChild(radio);

            var label = document.createElement("label");
            label.setAttribute("for", v["value"]);
            label.setAttribute("i18n", v["value"]);
            option.appendChild(label);

            if (v["desc"] !== "desc") {
                var info = document.createElement("div");
                info.setAttribute("class", "select-title-info");
                info.innerHTML = "&#x1F6C8;";

                var info_tooltip = document.createElement("span");
                info_tooltip.setAttribute("class", "info-tooltip");
                info_tooltip.setAttribute("i18n", v["desc"]);
                info.appendChild(info_tooltip);

                option.appendChild(info);
            }
            select_options.appendChild(option);
        }
        curr_sp.style.display = 'block';
        curr_sp.style.marginLeft = '30px'; // cyrine

        let selectedOption = document.querySelector('#sp-1 input[type="radio"]:checked').parentNode;
        selectedOption.insertAdjacentElement('afterend', curr_sp);


        // Unfold in the interface
        curr_sp.querySelector("input[type=checkbox]").checked = true;

        // Add function when checked
        $('input[type=radio][name=' + name + ']').change(function() {
            if (correctValues()) {
                changeMap();
            }
        });
    } catch (error) {
        curr_sp.style.display = 'none';

        // Empty select options
        let select_options = curr_sp.querySelector(".select-options");
        select_options.innerHTML = "";
    }
    translatePage();
}
function updateSelectorAfterSP2(name, justice_value)  {
    let map_type_value = getValue("map_type");
    let sp = {
        "amenity": "sp-3",
        "mot": "sp-4"
    }
    // Find the .select-main to change
    let existentSP = document.querySelector('#' + sp[name]);
    if (existentSP) {
        existentSP.remove();
    }
    let curr_sp = document.createElement('div');
    curr_sp.setAttribute('class', 'select-main');
    curr_sp.setAttribute('id',  sp[name]);
    curr_sp.style.display = 'none'; // Initially hidden, show it when ready
    curr_sp.style.borderTop = '1px solid var(--tum-blue-dark)';

    let titleDiv = document.createElement('div');
    titleDiv.className = 'select-title-text';
    titleDiv.setAttribute('i18n', 'select'); // Setting the i18n attribute for internationalization
    curr_sp.appendChild(titleDiv);

    let selectOptionsDiv = document.createElement('div');
    selectOptionsDiv.className = 'select-options';
    selectOptionsDiv.setAttribute('id', name); // Consider dynamic IDs or classes if multiple instances
    curr_sp.appendChild(selectOptionsDiv);

    try {

        let select_title_text = curr_sp.querySelector('.select-title-text');
        select_title_text.setAttribute("i18n", selector_values_after_sp_1[map_type_value][justice_value][name]["title"])

        // Fetch possible values
        let selector_dict = selector_values_after_sp_1[map_type_value][justice_value][name]["values"];
        if (selector_dict.length == 0) { throw EvalError; }

        // Empty select options
        let select_options = curr_sp.querySelector(".select-options");
        select_options.innerHTML = "";

        // Create the different options
        for (const v of selector_dict) {
            var option = document.createElement("div");
            option.setAttribute("class", "select-option");

            var radio = document.createElement("input");
            radio.setAttribute("type", "radio");
            radio.setAttribute("name", name);
            radio.setAttribute("id", v["value"]);
            radio.setAttribute("value", v["value"]);
            option.appendChild(radio);

            var label = document.createElement("label");
            label.setAttribute("for", v["value"]);
            label.setAttribute("i18n", v["value"]);
            option.appendChild(label);

            if (v["desc"] !== "desc") {
                var info = document.createElement("div");
                info.setAttribute("class", "select-title-info");
                info.innerHTML = "&#x1F6C8;";

                var info_tooltip = document.createElement("span");
                info_tooltip.setAttribute("class", "info-tooltip");
                info_tooltip.setAttribute("i18n", v["desc"]);
                info.appendChild(info_tooltip);

                option.appendChild(info);
            }
            select_options.appendChild(option);
        }
        curr_sp.style.display = 'block';
        curr_sp.style.marginLeft = '30px';
        let selectedOption = document.querySelector('#sp-1 input[type="radio"]:checked').parentNode;
        let nextSibling = selectedOption.nextElementSibling;
        if (nextSibling) {
            nextSibling.insertAdjacentElement('afterend', curr_sp);
        } else {
            // If there is no next sibling, just insert curr_sp after the selectedOption
            selectedOption.insertAdjacentElement('afterend', curr_sp);
        }
        //curr_sp.querySelector("input[type=checkbox]").checked = true;

        // Add function when checked
        $('input[type=radio][name=' + name + ']').change(function() {
            if (correctValues()) {
                changeMap();
            }
        });
    } catch (error) {
        curr_sp.style.display = 'none';

        // Empty select options
        let select_options = curr_sp.querySelector(".select-options");
        select_options.innerHTML = "";
    }
    translatePage();
}
// Add callback for SP0
$('input[type=radio][name=map_type]').change(function() {
    updateSelectorAfterSP0("justice", this.value);
    updateSelectorAfterSP1("v1", "", "");
    updateSelectorAfterSP2("amenity", "", "");
    updateSelectorAfterSP2("mot", "", "");

    if (correctValues()) {
        changeMap();
    }
});

function valueInList(list, value) {
    try {
        for (let item of list["values"]) {
            if (item.value === value)
                return true;
        }
    } catch {}
    return false;
}

function listLength(list) {
    try {
        return list["values"].length;
    } catch {}
    return 0;
}

function correctValues(values) {
    if (values == undefined) {
        // If value dict not passed, use selectors
        if (getValue("map_type") == "summ") return true;

        if (getValue("justice") == undefined) return false;
        
        return ((!isDisabled("v1") && getValue("v1") != undefined) || isDisabled("v1"))
        && ((!isDisabled("amenity") && getValue("amenity") != undefined) || isDisabled("amenity"))
        && ((!isDisabled("mot") && getValue("mot") != undefined) || isDisabled("mot"));
    } else {
        // Otherwise check in values dict
        if (values["map_type"] == "summ") return true;

        if (values["justice"] == undefined) return false;

        let c_v1;
        try {
            c_v1 = (listLength(selector_values_after_sp_1[values["map_type"]][values["justice"]]["v1"]) == 0) ||
            (valueInList(selector_values_after_sp_1[values["map_type"]][values["justice"]]["v1"], values["v1"]));
        } catch {
            c_v1 = true;
        }

        let c_amenity;
        try {
            c_amenity = (listLength(selector_values_after_sp_1[values["map_type"]][values["justice"]]["amenity"]) == 0) ||
            (valueInList(selector_values_after_sp_1[values["map_type"]][values["justice"]]["amenity"], values["amenity"]));
        } catch {
            c_amenity = true;
        }

        let c_mot;
        try {
            c_mot = (listLength(selector_values_after_sp_1[values["map_type"]][values["justice"]]["mot"]) == 0) ||
            (valueInList(selector_values_after_sp_1[values["map_type"]][values["justice"]]["mot"], values["mot"]));
        } catch {
            c_mot = true;
        }
        
        return c_v1 && c_amenity && c_mot;
    }
}
