#!/bin/bash
#  _____                                                                       _____ 
# ( ___ )                                                                     ( ___ )
#  |   |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|   | 
#  |   |      _             _ ____                           _          _      |   | 
#  |   |     | | __ ___   _(_)  _ \ __ _ _ __ ___   ___  ___| |    __ _| |__   |   | 
#  |   |  _  | |/ _` \ \ / / | |_) / _` | '_ ` _ \ / _ \/ __| |   / _` | '_ \  |   | 
#  |   | | |_| | (_| |\ V /| |  _ < (_| | | | | | | (_) \__ \ |__| (_| | |_) | |   | 
#  |   |  \___/ \__,_| \_/ |_|_| \_\__,_|_| |_| |_|\___/|___/_____\__,_|_.__/  |   | 
#  |   | Javier Ramos Nistal @JaviRamosLab                                     |   | 
#  |   | Website - https://JaviRamosLab.com                                    |   | 
#  |   | Github - https://www.github.com/JaviRamosLab                          |   | 
#  |   | YouTube - https://www.youtube.com/@JaviRamosLab                       |   | 
#  |   | Facebook - https://www.facebook.com/JaviRamosLab                      |   | 
#  |   | Telegram - https://telegram.me/JaviRamosLab                           |   | 
#  |   | Email - co2mm.esperanto@gmail.com                                     |   | 
#  |___|~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|___| 
# (_____)                                                                     (_____)

issue_list=$(gh issue list)

E_ERROR=1

echo "Issues: $issue_list"

echo -e "$issue_list" > issue-list.csv

cmd