var languageSelector = document.getElementById("language-selector");
var languageSelectorMovil = document.getElementById("language-selector-movil");

function replaceText(elementId, translationKey) {
  var element = document.getElementById(elementId);
  if (element) {
    element.innerText = window.translations[translationKey];
  }
}

function applyTranslations() {
  replaceText("company", "company");
  replaceText("passenger", "passenger");
  replaceText("questions", "questions");
  replaceText("we", "we");
  replaceText("extraButton", "extraButton");
  replaceText("hero_passenger_title", "hero_passenger_title");
  replaceText("hero_business_title", "hero_business_title");
  replaceText("features_passenger_title", "features_passenger_title");
  replaceText("feature_passenger_li_1", "feature_passenger_li_1");
  replaceText("feature_passenger_li_2", "feature_passenger_li_2");
  replaceText("feature_passenger_li_3", "feature_passenger_li_3");
  replaceText("feature_passenger_li_4", "feature_passenger_li_4");
  replaceText("feature_business_title", "feature_business_title");
  replaceText("feature_business_card_1_title", "feature_business_card_1_title");
  replaceText("feature_business_card_2_title", "feature_business_card_2_title");
  replaceText("feature_business_card_3_title", "feature_business_card_3_title");
  replaceText("video_title", "video_title");
  replaceText("video_passenger_subtitle", "video_passenger_subtitle");
  replaceText("video_passenger_description", "video_passenger_description");
  replaceText("questions_title", "questions_title");
  replaceText("questions_description", "questions_description");
  replaceText("questions_name", "questions_name");
  replaceText("questions_email", "questions_email");
  replaceText("questions_category", "questions_category");
  replaceText("questions_message", "questions_message");
  replaceText("we_title", "we_title");
  replaceText("we_member_1_info", "we_member_1_info");
  replaceText("we_member_2_info", "we_member_2_info");
  replaceText("we_member_3_info", "we_member_3_info");
  replaceText("we_member_4_info", "we_member_4_info");
  replaceText("we_member_5_info", "we_member_5_info");
  replaceText("we_member_1_name", "we_member_1_name");
  replaceText("FAQ_title", "FAQ_title");
  replaceText("FAQ_question_1", "FAQ_question_1");
  replaceText("FAQ_answer_1", "FAQ_answer_1");
  replaceText("FAQ_question_2", "FAQ_question_2");
  replaceText("FAQ_question_3", "FAQ_question_3");
  replaceText("privacy_policy", "privacy_policy");
  replaceText("cookie_policy", "cookie_policy");
  replaceText("terms_conditions", "terms_conditions");
  replaceText("legal", "legal");
  replaceText("connect_with_us", "connect_with_us");
}

languageSelector.addEventListener("change", function () {
  var selectedLanguage = languageSelector.value;
  fetch(selectedLanguage + ".json")
    .then((response) => response.json())
    .then((data) => {
      window.translations = data;
      applyTranslations();
    })
    .catch((error) => {
      console.error("Error fetching translations:", error);
    });
  languageSelectorMovil.value = selectedLanguage;
});

languageSelectorMovil.addEventListener("change", function () {
  var selectedLanguage = languageSelectorMovil.value;
  fetch(selectedLanguage + ".json")
    .then((response) => response.json())
    .then((data) => {
      window.translations = data;
      applyTranslations();
    })
    .catch((error) => {
      console.error("Error fetching translations:", error);
    });
  languageSelector.value = selectedLanguage;
});
